import React from 'react';

//components
import { Header } from '../components/Header/Header';
import { GlobalStyle } from './GlobalStyle';

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
    </>
  );
};
