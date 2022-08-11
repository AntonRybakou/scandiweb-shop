import React, { ReactElement } from 'react';

import styled from 'styled-components';

import { AppRoutes, Header } from 'common/components';

export const App = (): ReactElement => {
  const AppWrapper = styled.div`
    margin: 0 auto;
    padding: 0 100px;
    display: flex;
    flex-flow: column wrap;
    border: 1px dotted darkred;
  `;

  return (
    <AppWrapper>
      <Header />
      <AppRoutes />
    </AppWrapper>
  );
};
