import { Button, ChakraProvider } from '@chakra-ui/react';
import React, { FC, memo } from 'react';

import { theme } from './theme/theme';

export const App: FC = memo(() => (
  <ChakraProvider theme={theme}>
    <Button colorScheme="teal">ボタン</Button>
    <p>あああああああ</p>
  </ChakraProvider>
));
