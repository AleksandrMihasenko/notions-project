import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';

const AppRouter = () => {
  return (
    <div className='page-wrapper'>
      <Suspense>
        <Routes>
          { Object.values(routeConfig).map(({ element, path }) => (
              <Route
                key={ path }
                element={ element }
                path={ path }
              />
          )) }
        </Routes>
      </Suspense>
    </div>
  );
};

export default AppRouter;
