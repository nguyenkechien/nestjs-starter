import React from 'react';
import { NextPage } from 'next';

const Home: NextPage<{ data: any }> = (props) => {
  const { data } = props;
  return (
    <div>
      <h1>Hello from NextJS! - Home</h1>
      some initial props including query params and controller data:
      {JSON.stringify(data)}
    </div>
  );
};

Home.getInitialProps = ({ query }) => {
  return {
    data: query,
  };
};

export default Home;
