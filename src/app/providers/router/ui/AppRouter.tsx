
import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'widgets/PageLoader/PageLoader';

export default function AppRouter () {
  console.log(routeConfig);
  console.log(Object.values(routeConfig));
  return (
    <Suspense fallback={<PageLoader/>}>
      <Routes>
        {Object.values(routeConfig).map(({ path, element }) => {
          return (
            <Route
              key={path}
              path={path}
              element={<div className="page-wrapper">{element}</div>}
            />
          );
        })}
      </Routes>
    </Suspense>
  );
}
