import { Auth } from '@pages/Auth';
import { TTokenData } from 'context/auth';
import { ReactElement } from 'react';

type TRoute = {
  path: string,
  element: ReactElement
}

const privatesRoutes: TRoute[] = [
  {
    path: '/home',
    element: <Auth />
  }
]; 

const confirmRoute: TRoute[] = [
  {
    path: '/account/confirm',
    element: <h2>Página de confirmação de conta</h2>
  }
];

export const getRoutes = (user: TTokenData) => user.verified ? privatesRoutes : confirmRoute;