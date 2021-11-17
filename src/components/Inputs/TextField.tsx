import React, { FC } from 'react';
import { useField } from 'formik';
import { InputControl } from 'formik-chakra-ui';
import styled from 'styled-components';

type TextFieldProps = {
  name: string;
  onBlur?: () => void;
  onChange?: () => void;
  value?: string;
  placeholder: string;
  label?: string;
  type?: string;
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

const TextField: FC<TextFieldProps> = (props) => {
  const { name, onBlur, onChange, value, placeholder } = props;
  const [field] = useField<string>({ name, onBlur, onChange, value });
  return (
    <S.Wrapper>
      <InputControl inputProps={{ placeholder }} {...field} {...props} />
      <br />
    </S.Wrapper>
  );
};

export default TextField;
