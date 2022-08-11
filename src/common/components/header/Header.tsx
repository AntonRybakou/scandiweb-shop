import React, { ReactElement } from 'react';

import styled from 'styled-components';

import LogoImg from '../../../accets/images/logo/a-logo.svg';

import { ActionsButtons, Categories } from 'common/components';

export const Header = (): ReactElement => {
  const HeaderWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 80px;
    border: 1px solid black;
  `;

  const Logo = styled.img`
    position: absolute;
    left: 49%;
    width: 41px;
    height: 41px;
  `;

  return (
    <HeaderWrapper>
      <Categories />
      <Logo src={LogoImg} alt="Logo" />
      <ActionsButtons />
    </HeaderWrapper>
  );
};
