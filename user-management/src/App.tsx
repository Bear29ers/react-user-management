import React from 'react';
import { ChakraProvider, Button } from '@chakra-ui/react';
import theme from './theme/theme';
import './App.css';

export default function App() {
  return (
    <ChakraProvider theme={theme}>
      <Button colorScheme="teal">ボタン</Button>
      <p>ああああああ</p>
    </ChakraProvider>
  );
}
