import React, { useState } from 'react';
import { Select as DsSelect } from '@dotkomonline/design-system';
// import styled from 'styled-components';
import ReactSelect from 'react-select';
import styled, { StyledComponentProps } from 'styled-components';

interface SelectPropsTest extends StyledComponentProps<'select', any, any, any> {
  options: OptionType[];
}

const StyledSelect = styled(ReactSelect)`
  transition: all 0.2s;
  padding: 8px 20px 8px 8px;
  background: #fff;
  border-radius: 3px;
  border: 2px solid #ababab;
  cursor: pointer;
  &:hover {
    border-color: #blue;
  }
  appearance: none;
`;


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

const SelectTest = ({ options, ...rest }: SelectPropsTest) => <StyledSelect options={options} {...rest} />;

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
  const [selectedOption, setSelectedOption] = useState(props.options[0]);

  const handleChange = (option: OptionType) => {
    setSelectedOption(option);
  };

  return (
    <S.Wrapper>
      <SelectTest
        name={props.name}
        options={props.options}
        value={selectedOption}
        onChange={(option: OptionType) => handleChange(option)}
      />
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
