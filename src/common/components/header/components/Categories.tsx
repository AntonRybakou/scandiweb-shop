import React, { ReactElement } from 'react';

import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Categories = (): ReactElement => {
  const NavMenu = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    height: 100%;
  `;

  const StyledLink = styled(NavLink)`
    padding: 0 16px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    text-transform: uppercase;
    text-decoration: none;
    color: black;
    font-family: 'Raleway', sans-serif;

    &.active {
      color: #5ece7b;

      &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 2px;
        background-color: #5ece7b;
        transform: translateY(100%);
        transition: transform 0.3s ease-in-out;
      }
    }

    &:hover {
      color: #5ece7b;

      &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 2px;
        background-color: #5ece7b;
        transform: translateY(100%);
        transition: transform 0.3s ease-in-out;
      }
    }
  `;

  return (
    <NavMenu>
      <StyledLink to="/women">Women</StyledLink>
      <StyledLink to="men">Men</StyledLink>
      <StyledLink to="kids">Kids</StyledLink>
    </NavMenu>
  );
};
