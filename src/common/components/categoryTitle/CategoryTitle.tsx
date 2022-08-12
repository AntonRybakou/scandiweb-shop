import { ReactElement } from 'react';

import styled from 'styled-components';

type PropsType = {
  name: string;
};

const Title = styled.h1`
  margin-top: 80px;
  margin-bottom: 100px;
  font-family: 'Raleway', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 42px;
  line-height: 160%;
`;

export const CategoryTitle = ({ name }: PropsType): ReactElement => {
  return <Title>{name}</Title>;
};
