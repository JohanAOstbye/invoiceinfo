import React, { FC } from 'react';
import styled from 'styled-components';
import { colors, media } from '@dotkomonline/design-system';

interface AreaProps {
  title?: string;
}

const Area: FC<AreaProps> = ({ title, children }) => {
  return (
    <S.Section>
      {title && <S.Title>{title}</S.Title>}
      {children}
    </S.Section>
  );
};

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
};

export default Area;
