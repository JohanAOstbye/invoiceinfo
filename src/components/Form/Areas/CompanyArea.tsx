import React, { FC, useEffect } from 'react';
import { FormikProps, FormikValues, useFormikContext } from 'formik';
import axios from 'axios';
import TextField from '../../Inputs/TextField';
import Area from '../../Area';

// eslint-disable-next-line @typescript-eslint/ban-types
const CompanyArea: FC<{}> = () => {
  const { values }: FormikProps<FormikValues> = useFormikContext();

  useEffect(() => {
    if(values.orgnr.length === 9 && values.companyName === "") {
      
      axios
        .get(`https://data.brreg.no/enhetsregisteret/api/enheter/${encodeURIComponent(values.orgnr)}`)
        .then(
          (response) => {
            const {data}:{data:any} = response
            // eslint-disable-next-line no-prototype-builtins
            if(typeof data === 'object' && data && data.hasOwnProperty('navn')) {
              const {navn} = data
              values.companyName = navn
            }
          }
        ).catch(
          // eslint-disable-next-line @typescript-eslint/no-empty-function
          (error) => {
          }
        )
    }

  }, [values])
  return (
    <Area title="Bedrift">
      <TextField name="orgnr" label="Organisasjonsnummer" placeholder="460059275" />
      <TextField name="companyName" label="Bedriftsnavn" placeholder="Bedrift AS" />
    </Area>
  )
};

export default CompanyArea;
