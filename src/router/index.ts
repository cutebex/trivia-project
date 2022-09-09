import React, { lazy } from 'react';

import Protect from '../components/protect';

interface IRoute {
  index?: boolean;
  path?: string;
  guard?: any;
  layout?: React.FC;
  component: any;
}

const routes: IRoute[] = [
    {
      index: true,
      path: '/',
      component: lazy(() => import('../pages/home/Home')),
    },
    {
      index: true,
      guard: Protect,
      path: '/quiz',
      component: lazy(() => import('../pages/quiz/QuizScreen')),
    },
    {
      index: true,
      guard: Protect,
      path: '/results',
      component: lazy(() => import('../pages/results/ResultScreen')),
    },
  ];

export default routes;