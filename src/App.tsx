import React from 'react';

import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/Navbar';

import { AuthProvider } from './contexts/Auth';
import { ChakraProvider } from '@chakra-ui/react'


import "./styles/Global.css"

function App() {
  return (
    <>
      <AuthProvider>
        <ChakraProvider>
          <Header />
          <Navbar />
          <Outlet />
        </ChakraProvider>
      </AuthProvider>
    </>
  );
}

export default App;
