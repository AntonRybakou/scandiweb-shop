import React, { ReactElement } from 'react';

import { AppRoutes, Header } from 'common/components';

export const App = (): ReactElement => {
  return (
    <div>
      <AppRoutes />
      <Header />
    </div>
  );
};
