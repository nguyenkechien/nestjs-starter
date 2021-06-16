import React from 'react';
import { NextPage } from 'next';
import { Request } from 'express';

import { typedQuery } from '../app/apollo-client';

export async function getServerSideProps({ req }) {
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
}

type Props = ExtractPromiseType<ReturnType<typeof getServerSideProps>>;

const Orders: NextPage<Props['props']> = (props) => {
  console.log(props);
  const order = () => {
    // client.mutate({ mutation: })
  };
  return (
    <div>
      <h1>Orders overview</h1>
      {JSON.stringify(props)}
      <button></button>
    </div>
  );
};

export default Orders;
