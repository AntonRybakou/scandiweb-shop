import React, { ReactElement } from 'react';

import { Navigate, Route, Routes } from 'react-router-dom';

import { LINK } from 'common/enums';
import { LoginPage } from 'features/authPages/';

export const AppRoutes = (): ReactElement => (
  <div>
    <Routes>
      <Route path="/" element={<Navigate replace to={LINK.LOGIN} />} />
      <Route path={LINK.LOGIN} element={<LoginPage />} />
      {/* <Route path={LINK.REGISTER} element={<RegisterPage />} /> */}
      {/* <Route path={LINK.RECOVER} element={<ForgotPage />} /> */}
      {/* <Route path={LINK.FOUND404} element={<NotFoundPage />} /> */}
      {/* <Route path={LINK.PASSWORD} element={<NewPasswordPage />} /> */}
      {/* <Route path={LINK.EMAIL} element={<CheckEmail />} /> */}
      {/* <Route path={LINK.PROFILE} element={<ProfilePage />} /> */}
      {/* <Route path="*" element={<Navigate replace to={LINK.FOUND404} />} /> */}
    </Routes>
  </div>
);
