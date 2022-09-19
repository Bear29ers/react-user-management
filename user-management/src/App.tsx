import { Button, ChakraProvider } from '@chakra-ui/react';
import React, { FC, memo } from 'react';

export const App: FC = memo(() => (
  <ChakraProvider>
    <Button colorScheme="teal">ボタン</Button>
  </ChakraProvider>
));
