import React, { FC, useEffect } from 'react';
import { FormikProps, FormikValues, useFormikContext } from 'formik';
import axios from 'axios';
import TextField from '../../Inputs/TextField';
import Area from '../../Area';

// eslint-disable-next-line @typescript-eslint/ban-types
const CompanyArea: FC<{}> = () => {
  const { values }: FormikProps<FormikValues> = useFormikContext();
  const { orgnr, companyName } = values;

  useEffect(() => {
    if (orgnr.length === 9 && companyName === '') {
      axios
        .get(`https://data.brreg.no/enhetsregisteret/api/enheter/${encodeURIComponent(values.orgnr)}`)
        .then((response) => {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const { data }: { data: any } = response;
          // eslint-disable-next-line no-prototype-builtins
          if (typeof data === 'object' && data && data.hasOwnProperty('navn')) {
            const { navn } = data;
            values.companyName = navn;
          }
        })
        .catch((err) => {
          // eslint-disable-next-line no-console
          console.log(`mail error: ${err}`);
        });
    }
  }, [values.orgnr]);
  return (
    <Area title="Bedrift">
      <TextField name="orgnr" label="Organisasjonsnummer" placeholder="460059275" />
      <TextField name="companyName" label="Bedriftsnavn" placeholder="Bedrift AS" />
    </Area>
  );
};

export default CompanyArea;
