import React, { ReactElement } from 'react';

import styled from 'styled-components';

import LogoImg from '../../../accets/images/logo/a-logo.svg';

import { ActionsButtons, Categories } from 'common/components';

const HeaderWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 80px;
`;

const Logo = styled.img`
  position: absolute;
  left: 49%;
  width: 41px;
  height: 41px;
`;

export const Header = (): ReactElement => {
  return (
    <HeaderWrapper>
      <Categories />
      <Logo src={LogoImg} alt="Logo" />
      <ActionsButtons />
    </HeaderWrapper>
  );
};
