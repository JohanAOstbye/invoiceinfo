import React, { FC } from 'react';
import { useField } from 'formik';
import { TextareaControl } from 'formik-chakra-ui';
import styled from 'styled-components';

type TextAreaProps = {
  name: string;
  onBlur?: () => void;
  onChange?: () => void;
  value?: string;
  placeholder: string;
};

const S = {
  Wrapper: styled.div`
    display: flex;
    justify-content: center;
    & > div {
      width: 100%;
      max-width: 500px;
    }
  `,
};

const TextArea: FC<TextAreaProps> = (props) => {
  const { name, onBlur, onChange, value, placeholder } = props;
  const [field] = useField<string>({ name, onBlur, onChange, value });

  return (
    <S.Wrapper>
      <TextareaControl textareaProps={{ placeholder }} {...field} {...props} />
      <br />
    </S.Wrapper>
  );
};

export default TextArea;
