import React from 'react';
import {Routes, Route} from 'react-router-dom';
import { list, root } from '.';
import { Home, List  } from '../pages';

export const AppRouter: React.FC = () => {

  return (
    <Routes>
      <Route path={root} element={<Home />} />
      <Route path={list} element={<List />} />
    </Routes>
  );
};
