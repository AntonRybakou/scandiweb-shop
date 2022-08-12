import React, { ReactElement } from 'react';

import styled from 'styled-components';

import { AppRoutes, Header } from 'common/components';

const AppWrapper = styled.div`
  margin: 0 auto;
  padding: 0 100px;
  display: flex;
  flex-flow: column wrap;
`;

export const App = (): ReactElement => {
  return (
    <AppWrapper>
      <Header />
      <AppRoutes />
    </AppWrapper>
  );
};
