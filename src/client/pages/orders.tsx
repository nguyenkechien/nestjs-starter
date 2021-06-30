import React, { useState } from 'react';
import { NextPage } from 'next';
import { Request } from 'express';
import { merge, keyBy, values } from 'lodash';

import { typedMutate, typedQuery } from '../app/apollo-client';
import { wrapper } from '../redux/store';

const callBackServerSideProps = async ({ req }) => {
  const data = await typedQuery(
    {
      orders: {
        alias: true,
        thing: { name: true },
      },
      things: {
        id: true,
        name: true,
      },
    },
    req,
  );

  return {
    props: {
      user: (req as Request).user,
      orders: data.orders,
      things: data.things,
    },
  };
};

export const getServerSideProps = wrapper.getServerSideProps(
  () => callBackServerSideProps,
);

type Props = ExtractPromiseType<ReturnType<typeof callBackServerSideProps>>;
type ThingOrderType = {
  id: number;
  name: string;
};
const Orders: NextPage<Props['props']> = (props) => {
  const [myOrders, setMyOrders] = useState(props.orders);
  const order = async (thing: ThingOrderType) => {
    const orderThing = {
      alias: `${thing.id}`,
      thingName: thing.name,
    };
    const data = await typedMutate({
      createOrder: [orderThing, { alias: true, thing: { name: true } }],
    });
    const merged = merge(
      keyBy(myOrders, 'alias'),
      keyBy([data.createOrder], 'alias'),
    );
    const newOrder = values(merged);
    setMyOrders(newOrder);
  };
  return (
    <div>
      <h1>Orders overview</h1>
      <h3>Hello {props.user.username}</h3>
      <div>Things</div>
      <ul>
        {props.things.map((thing) => (
          <li key={thing.id} onClick={() => order(thing)}>
            {thing.name}
          </li>
        ))}
      </ul>
      <br />
      <hr />
      <div>My Order</div>
      <ul>
        {myOrders.map((o) => (
          <li key={o.alias}>{`my order-${o.alias}-${o.thing.name}`}</li>
        ))}
      </ul>
    </div>
  );
};

export default Orders;
