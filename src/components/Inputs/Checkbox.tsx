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
  const [field, meta, helpers] = useField({ type: 'checkbox', ...props, multiple: true });
  const formInterests: string[] = meta.value;
  const { setValue } = helpers;
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    if (isChecked) {
      // Only add value if the list doesn't contain the value
      if (formInterests.indexOf(field.value) === -1) {
        setValue([...formInterests, field.value]);
      }
    } else {
      const newInterest = formInterests.filter((interest) => interest !== field.value);
      setValue(newInterest);
    }
  }, [isChecked]);

  const handleChange = (checked?: boolean) => {
    setIsChecked(!!checked);
  };

  return <DsCheckbox label={label} isChecked={isChecked} {...props} onChange={handleChange} />;
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
