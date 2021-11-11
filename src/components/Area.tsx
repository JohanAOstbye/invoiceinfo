import React, { FC } from 'react';
import styled from 'styled-components';
import { colors, media } from '@dotkomonline/design-system';

interface AreaProps {
  title?: string;
  maxWidth?: boolean;
}

const S = {
  Title: styled.h2`
    color: ${colors.grayDarken90};
    letter-spacing: 0.5px;
    margin-bottom: 10px;
    font-size: 1.4rem;
  `,
  Section: styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-grow: 1;
    width: 100%;
    padding: 20px 50px;
    @media ${media.mobileOnly} {
      padding: 10px 20px;
    }
  `,
  Div: styled.div`
    display: grid;
    grid-gap: 1rem;
    grid-template-rows: repeat(1fr);
    max-width: 500px;
    width: 100%;
    margin: 0 auto;
  `,
};

const Area: FC<AreaProps> = ({ title, maxWidth, children }) => (
  <S.Section>
    {title && <S.Title>{title}</S.Title>}
    {maxWidth ? children : <S.Div>{children}</S.Div>}
  </S.Section>
);

export default Area;
