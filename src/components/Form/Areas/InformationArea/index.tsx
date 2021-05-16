import React from 'react';
import styled from 'styled-components';
import { colors, md } from '@dotkomonline/design-system';
import Area from '../../../Area';
import { introText } from './informationText';

const S = {
  Wrapper: styled.div`
    font-size: 1rem;
    padding: 15px 0px;
    line-height: 1.5;
    border-width: 1px 0px;
    border-color: ${colors.grayDarken30};
    border-style: solid;
  `,
  Details: styled.details`
    margin: 1.25rem 0;
    summary {
      margin-bot: 1rem;
    }
  `,
};

const InformationArea = (): JSX.Element => (
  <Area>
    <S.Wrapper>
      {md`${introText}`}
      {/* <S.Details>
          <summary>Les mer om produkter</summary>
          {md`${productDetails}`}
        </S.Details> */}
    </S.Wrapper>
  </Area>
);

export default InformationArea;
