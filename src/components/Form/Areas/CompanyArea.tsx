import React, { FC } from 'react';
import TextField from '../../Inputs/TextField';
import Area from '../../Area';

const CompanyArea: FC<{}> = () => {
  return (
    <Area title="Bedrift">
      <TextField name="companyName" label="Bedriftsnavn" placeholder="Bedrift AS" />
    </Area>
  );
};

export default CompanyArea;
