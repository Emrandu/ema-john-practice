import React from 'react';
import Header from './components/Header/Header';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Header></Header>
      <Outlet/>
    </>
  );
};

export default App;