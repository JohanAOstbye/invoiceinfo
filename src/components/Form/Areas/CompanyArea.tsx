import React, { FC } from 'react';
import TextField from '../../Inputs/TextField';
import Area from '../../Area';

// eslint-disable-next-line @typescript-eslint/ban-types
const CompanyArea: FC<{}> = () => (
    <Area title="Bedrift">
      <TextField name="companyName" label="Bedriftsnavn" placeholder="Bedrift AS" />
    </Area>
  );

export default CompanyArea;
