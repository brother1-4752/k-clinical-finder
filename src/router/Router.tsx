import { createBrowserRouter } from 'react-router-dom';
import { ReactNode } from 'react';

import { Main, NotFound } from '../pages';
import App from '../App';

type Router = {
  path: string;
  element: ReactNode;
  errorElement?: ReactNode;
  children?: Router[];
};

const routerData: Router[] = [
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [{ path: '', element: <Main /> }],
  },
];

const router = createBrowserRouter(routerData);

export default router;
