import React, { ReactElement } from 'react';

import styled from 'styled-components';

import { AppRoutes, Header } from 'common/components';

export const App = (): ReactElement => {
  const AppWrapper = styled.div`
    margin: 0 auto;
    width: 1240px;
    display: flex;
    flex-wrap: wrap;
    border: 1px dotted darkred;
  `;

  return (
    <AppWrapper>
      <Header />
      <AppRoutes />
    </AppWrapper>
  );
};
