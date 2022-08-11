import React, { ReactElement } from 'react';

import styled from 'styled-components';

import CurrencyLogo from 'accets/images/actions/currency-logo.svg';
import CartIcon from 'accets/images/actions/empty-cart.svg';

export const ActionsButtons = (): ReactElement => {
  const Actions = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-end;
    height: 100%;
    gap: 22px;
  `;
  const Button = styled.button`
    all: unset;
    cursor: pointer;
    border: none;
    background-color: transparent;
    outline: none;
    padding: 0;
    margin: 0;
  `;

  return (
    <Actions>
      <Button type="button">
        <img src={CurrencyLogo} alt="Currency Logo" />
      </Button>
      <Button type="button">
        <img src={CartIcon} alt="empty cart" />
      </Button>
    </Actions>
  );
};
