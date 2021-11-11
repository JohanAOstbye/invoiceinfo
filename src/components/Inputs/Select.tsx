import React from 'react';
import { useField } from 'formik';
import { SelectControl } from 'formik-chakra-ui';
import styled from 'styled-components';

const S = {
  Wrapper: styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 1.3rem;

    & > div {
      max-width: 500px;
      width: 100%;
    }
  `,
};

// const SelectTest = ({ options, ...rest }: SelectPropsTest) => <StyledSelect options={options} {...rest} />;

export interface OptionType {
  value: string;
  label: string;
}

interface SelectProps {
  name: string;
  label: string;
  options: OptionType[];
}

const SelectBase = ({ ...props }: SelectProps) => {
  const [field, meta] = useField({ type: 'select', ...props });
  const placeholder = props.label;

  return (
    <S.Wrapper>
      <SelectControl
        {...field}
        name={props.name}
        selectProps={{ placeholder }}
        isInvalid={meta.error !== undefined && meta.touched}
      >
        {props.options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </SelectControl>
    </S.Wrapper>
  );
};

const Select = styled(SelectBase)`
  & + div {
    & > i {
      font-size: 1.2rem;
      position: absolute; /* Required or else the checkmark looks fucked*/
    }
  }
`;

export default Select;
