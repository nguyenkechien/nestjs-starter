import React from 'react';
import { NextPage } from 'next';
import Link from 'next/link';
import { ValueTypes } from '../app/types/graphql-zeus';

type Props = {
  data: {
    things: ValueTypes['Thing'][];
  };
};

const Home: NextPage<Props> = (props) => {
  const { data } = props;
  console.log(data);
  return (
    <div>
      <ul>
        <li>
          <Link href="/orders">
            <a> Order </a>
          </Link>
        </li>
        <li></li>
      </ul>
      <h1>Hello from NextJS! - Home</h1>
      some initial props including query params and controller data:
      {/* {JSON.stringify(data)} */}
      <div>Things</div>
      <ul>
        {data.things.map((thing) => (
          <li key={thing.id}>{thing.name}</li>
        ))}
      </ul>
    </div>
  );
};

Home.getInitialProps = async ({ query }) => {
  return {
    data: query,
  };
};

export default Home;
