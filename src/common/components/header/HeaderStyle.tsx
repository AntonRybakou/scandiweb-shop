import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 80px;
  border: 1px solid black;
`;

export const StyledLink = styled(NavLink)`
  color: #5ece7b;
`;

export const Logo = styled.img`
  width: 41px;
  height: 41px;
`;
