import React from 'react';

//components
import { Header } from '../components/Header/Header';
import { Main } from '../components/Main/Main';
import { GlobalStyle } from './GlobalStyle';
import { About } from '../components/About/About';

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Main />
      <About />
    </>
  );
};
