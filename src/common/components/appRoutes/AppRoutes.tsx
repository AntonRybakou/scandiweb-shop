import React, { ReactElement } from 'react';

import { Navigate, Route, Routes } from 'react-router-dom';

import { LINK } from 'common/enums';
import { Cart, KidsCategory, MenCategory, WomenCategory } from 'features';

export const AppRoutes = (): ReactElement => (
  <div>
    <Routes>
      <Route path="/" element={<Navigate replace to={LINK.WOMEN} />} />
      <Route path={LINK.WOMEN} element={<WomenCategory />} />
      <Route path={LINK.MEN} element={<MenCategory />} />
      <Route path={LINK.KIDS} element={<KidsCategory />} />
      <Route path={LINK.CART} element={<Cart />} />
    </Routes>
  </div>
);
