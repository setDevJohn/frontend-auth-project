import { ReactElement } from 'react';
import { TTokenData } from 'context/Auth/types';
import { Auth } from '@pages/Auth';
import { Home } from '@pages/Home';
import { ResetPassword } from '@pages/ResetPassword';
import { AccountConfirmation } from '@pages/AccountConfirmation';

type TRoute = {
  path: string,
  element: ReactElement
}

export const publicRoutes: TRoute[] = [
  { path: '/', element: <Auth /> },
  { path: '/account/reset-password', element: <ResetPassword/> }
];

const privatesRoutes: TRoute[] = [
  { path: '/home', element: <Home /> }
]; 

const confirmRoute: TRoute[] = [
  { path: '/account/confirm', element: <AccountConfirmation/> }
];

export function getRoutes (user: TTokenData) {
  if (!user.verified) return confirmRoute;
  return privatesRoutes;
}