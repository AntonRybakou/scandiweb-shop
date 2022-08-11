import React, { ReactElement } from 'react';

import CartIcon from '../../../accets/images/actions/empty-cart.svg';
import LogoImg from '../../../accets/images/logo/a-logo.svg';

import CurrencyLogo from 'accets/images/actions/currency-logo.svg';
import { HeaderWrapper, StyledLink, Logo, NavMenu, Actions } from 'common/components';

export const Header = (): ReactElement => {
  return (
    <HeaderWrapper>
      <NavMenu>
        <StyledLink to="/women">Women</StyledLink>
        <StyledLink to="men">Men</StyledLink>
        <StyledLink to="kids">Kids</StyledLink>
      </NavMenu>
      <Logo src={LogoImg} alt="Logo" />
      <Actions>
        <div>
          <img src={CurrencyLogo} alt="Currency Logo" />
        </div>
        <div>
          <img src={CartIcon} alt="empty cart" />
        </div>
      </Actions>
    </HeaderWrapper>
  );
};
