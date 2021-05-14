import React from 'react';
import styled from 'styled-components';

import { colors, Logo, Heading2 } from '@dotkomonline/design-system';

export const Banner: React.FC = () => {
  return (
    <>
      <S.Header>
        <Logo width="75%" primaryColor={colors.white} secondaryColor={colors.secondary} />
        <S.Title>Interesseskjema for bedrifter</S.Title>
      </S.Header>
    </>
  );
};
const S = {
  Header: styled.header`
    background-color: ${colors.primary};
    width: 100%;
    margin-bottom: 1.5rem;
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  Title: styled(Heading2)`
    text-align: center;
    color: white;
    margin-top: 1rem;
  `,
};
