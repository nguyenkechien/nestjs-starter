import React from 'react';
import { NextPage } from 'next';
import { Request } from 'express';
import { wrapper } from '../redux/store';

const callBackServerSideProps = async ({ req }) => {
  return {
    props: {
      user: (req as Request).user,
    },
  };
};

export const getServerSideProps = wrapper.getServerSideProps(
  () => callBackServerSideProps,
);

type Props = ExtractPromiseType<ReturnType<typeof callBackServerSideProps>>;

const Profile: NextPage<Props['props']> = (props) => {
  const { user } = props;

  return <h1>Profile {JSON.stringify(user)}</h1>;
};

export default Profile;
