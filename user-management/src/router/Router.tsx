import { FC, memo } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Login } from '../components/pages/Login';
import { homeRoutes } from './HomeRoutes';
import { Page404 } from '../components/pages/Page404';
import { HeaderLayout } from '../components/template/HeaderLayout';

export const Router: FC = memo(() => {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/home'>
        {homeRoutes.map((route) => (
          <Route key={route.path} path={`/home${route.path}`} element={<HeaderLayout>{route.element}</HeaderLayout>} />
        ))}
      </Route>
      <Route path='*' element={<Page404 />} />
    </Routes>
  );
});