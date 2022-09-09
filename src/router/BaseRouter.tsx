import React, { Suspense, Fragment } from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

import { Loading } from '../components/loading';


interface IRoute {
  index?: boolean;
  path?: string;
  guard?: any;
  layout?: React.FC;
  component: any;
}

const RootRouter = (routes: IRoute[] = []) => (
  <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Routes>
          {routes.map((route: IRoute, i: number) => {
            const Component = route.component;
            const Guard = route.guard || Fragment;
            const Layout = route.layout || Fragment;
            return (
              <Route
                key={i}
                path={route.path!}
                index={route.index!}
                element={
                  <Guard>
                    <Layout>
                      <Component />
                    </Layout>
                  </Guard>
                }
              />
            );
          })}
        </Routes>
      </Suspense>
    </BrowserRouter>
);

export default RootRouter;


