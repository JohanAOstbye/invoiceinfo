import React, { FC } from 'react';
import { useField } from 'formik';
import { NumberInputControl } from 'formik-chakra-ui';
import styled from 'styled-components';

type NumberFieldProps = {
  name: string;
  onBlur?: () => void;
  onChange?: () => void;
  value?: number;
  placeholder: string;
  label?: string;
  type?: number;
};

const S = {
  Wrapper: styled.div`
    display: flex-column;
    justify-content: center;
    margin-bottom: -1.7rem;
    margin-top: 0.3rem;

    & > div {
      max-width: 500px;
      width: 100%;
    }
  `,
};

const NumberField: FC<NumberFieldProps> = (props) => {
  const { name, onBlur, onChange, value, placeholder } = props;
  const [field] = useField<string>({ name, onBlur, onChange, value });
  return (
    <S.Wrapper>
      <NumberInputControl numberInputProps={{ placeholder }} {...field} {...props} showStepper={false} />
      <br />
    </S.Wrapper>
  );
};

export default NumberField;
