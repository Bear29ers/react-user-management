import { ChakraProvider } from '@chakra-ui/react';
import React, { FC, memo } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { Router } from './router/Router';
import { theme } from './theme/theme';

export const App: FC = memo(() => (
  <ChakraProvider theme={theme}>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </ChakraProvider>
));
