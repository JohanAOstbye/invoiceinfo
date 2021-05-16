import React, { FC } from 'react';
import styled from 'styled-components';
import { Button } from '@dotkomonline/design-system';
import Area from '../../../Area';
import SubmitStatus from './SubmitStatus';

interface SubmitAreaProps {
  onClick: (e: React.FormEvent<HTMLFormElement>) => void;
  loading: boolean;
  submitted: boolean;
  isValid: boolean;
  hasError: boolean;
  submitCount: number;
}

const S = {
  Wrapper: styled.div`
    width: 100%;
    max-width: 500px;
    align-self: center;
    display: grid;
    grid-template-columns: 3.5fr 1.5fr;
    gap: 2rem;
  `,
  ButtonDiv: styled.div`
    display: flex;
    justify-content: flex-end;
    & > button {
      height: max-content;
    }
  `,
};

const SubmitArea: FC<SubmitAreaProps> = ({ onClick, ...props }) => (
  <Area>
    <S.Wrapper>
      <SubmitStatus {...props} />
      <S.ButtonDiv>
        <Button color="primary" value="Send inn" onClick={onClick} disabled={props.submitted || props.loading} />
      </S.ButtonDiv>
    </S.Wrapper>
  </Area>
);

export default SubmitArea;
