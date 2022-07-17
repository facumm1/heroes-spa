import { Routes, Route } from 'react-router-dom';

import { HeroesRoutes } from '../heroes/routes/HeroesRoutes';
import { LoginPage } from '../auth';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {
  return (
    <>
      <Routes>

        <Route path="/login" element={
          <PublicRoute>
            <LoginPage />

            {/* Another way to do this. */}
            {/* <Routes>
              <Route path="/*" element={<LoginPage/>} />
            </Routes> */}
          </PublicRoute>
        } />

        <Route path="/*" element={
          <PrivateRoute>
            <HeroesRoutes />
          </PrivateRoute>
        } />

        {/* <Route path="login" element={ <LoginPage /> } /> */}
      </Routes>
    </>
  );
};
