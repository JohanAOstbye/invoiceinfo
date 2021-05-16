import React, { useState, useEffect } from 'react';
import { Checkbox as DsCheckbox } from '@dotkomonline/design-system';
import { useField } from 'formik';
import styled from 'styled-components';

interface CheckboxProps {
  value: string;
  name: string;
  label: string;
}

const CheckboxBase = ({ label, ...props }: CheckboxProps) => {
  const [isChecked, setIsChecked] = useState(false);
  const [field, meta, helpers] = useField(props.name);

  const handleChange = (checked?: boolean) => {
    setIsChecked(!!checked);
  };

  return (
    <>
      <DsCheckbox {...field} label={label} isChecked={isChecked} {...props} onChange={handleChange} />;
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
