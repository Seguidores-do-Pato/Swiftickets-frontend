import React from 'react';

import { Outlet } from 'react-router-dom';

import { AuthProvider } from './contexts/Auth';
import { ChakraProvider } from '@chakra-ui/react'


import "./styles/Global.css"

function App() {
  return (
    <>
      <AuthProvider>
        <ChakraProvider>
          <Outlet />
        </ChakraProvider>
      </AuthProvider>
    </>
  );
}

export default App;
