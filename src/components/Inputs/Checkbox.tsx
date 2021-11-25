import React from 'react';
import { CheckboxControl } from 'formik-chakra-ui';
import { useField } from 'formik';
import styled from 'styled-components';

interface CheckboxProps {
  name: string;
  label: string;
}

const CheckboxBase = ({ label, ...props }: CheckboxProps) => {
  const [field, meta] = useField({ type: 'checkbox', ...props });
  const { value, onChange } = field;
  return (
    <>
      <CheckboxControl
        {...value}
        name={props.name}
        onChange={(e) => {
          onChange(e);
        }}
      >
        {label}
      </CheckboxControl>
      {meta.error && meta.touched && <div>{meta.error}</div>}
    </>
  );
};

const Checkbox = styled(CheckboxBase)`
  & + div {
    & > i {
      font-size: 1.2rem;
      position: absolute; /* Required or else the checkmark looks fucked*/
    }
  }
`;

export default Checkbox;
