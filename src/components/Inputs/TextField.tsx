import { useField } from 'formik';
import React, { FC, ComponentProps } from 'react';
import { TextField as DsTextField } from '@dotkomonline/design-system';
import styled from 'styled-components';

type TextFieldProps = ComponentProps<typeof DsTextField>;

const S = {
  Wrapper: styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 0.7rem;
    margin-top: 0.3rem;

    & > div {
      max-width: 500px;
      width: 100%;
    }
  `,
};

const TextField: FC<TextFieldProps> = (props) => {
  const { name, onBlur, onChange, value } = props;
  const [field, meta] = useField<string>({ name, onBlur, onChange, value });
  return (
    <S.Wrapper>
      <DsTextField
        errorMessage={meta.error && meta.touched ? meta.error : undefined}
        status={meta.touched ? (meta.error ? 'error' : 'success') : undefined}
        {...field}
        {...props}
      />
    </S.Wrapper>
  );
};

export default TextField;
