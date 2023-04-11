import React from 'react';
import { HomeLayout } from '../layout/HomeLayout';
import { GlobalData, MyState, Post } from '../core';
import { Form } from '../components';

export const Home: React.FC = () => {
    

  return (
    <HomeLayout>
      <Form />
    </HomeLayout>
  );
};
