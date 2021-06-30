import React from 'react';
import { NextPage } from 'next';
import { ValueTypes } from '../app/types/graphql-zeus';
import { incrementByAmount } from '../redux/modules/counter';
import { useAppDispatch } from '../redux/hooks';

type Props = {
  data: {
    things: ValueTypes['Thing'][];
  };
};

const Home: NextPage<Props> = (props) => {
  const { data } = props;
  const dispatch = useAppDispatch();
  return (
    <div>
      <h1>Hello from NextJS! - Home</h1>
      some initial props including query params and controller data:
      <div>Things</div>
      <ul>
        {data.things?.map((thing) => (
          <li key={`${thing.id}`}>{thing.name}</li>
        ))}
      </ul>
      <hr />
      <button onClick={() => dispatch(incrementByAmount(2))}>Counter</button>
    </div>
  );
};

Home.getInitialProps = async ({ query }): Promise<Props> => {
  return {
    data: query as Props['data'],
  };
};

export default Home;
