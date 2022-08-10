import React, { ReactElement } from 'react';

import LogoImg from '../../../accets/logo/a-logo.svg';

import { HeaderWrapper, StyledLink, Logo } from 'common/components/header/HeaderStyle';

export const Header = (): ReactElement => {
  return (
    <HeaderWrapper>
      <div>
        <StyledLink to="/women">Women</StyledLink>
        <StyledLink to="men">Men</StyledLink>
        <StyledLink to="kids">Kids</StyledLink>
      </div>
      <Logo src={LogoImg} alt="Logo" />
      <div>Actions</div>
    </HeaderWrapper>
  );
};
