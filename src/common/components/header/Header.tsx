import React, { ReactElement } from 'react';

import LogoImg from '../../../accets/logo/a-logo.svg';

import { HeaderWrapper, StyledLink, Logo, NavMenu } from 'common/components';

export const Header = (): ReactElement => {
  return (
    <HeaderWrapper>
      <NavMenu>
        <StyledLink to="/women">Women</StyledLink>
        <StyledLink to="men">Men</StyledLink>
        <StyledLink to="kids">Kids</StyledLink>
      </NavMenu>
      <Logo src={LogoImg} alt="Logo" />
      <div>Actions</div>
    </HeaderWrapper>
  );
};
