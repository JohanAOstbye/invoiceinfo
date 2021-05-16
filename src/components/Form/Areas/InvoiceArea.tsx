import React, { FC } from 'react';
import { FormikProps, FormikValues, useFormikContext } from 'formik';
import styled from 'styled-components';
import TextField from '../../Inputs/TextField';
import Area from '../../Area';
import Select, { OptionType } from '../../Inputs/Select';
import ExtraInfo from '../../Inputs/ExtraInfo';

const delivery: OptionType[] = [
  {
    value: 'ehf',
    label: 'EHF',
  },
  {
    value: 'epost',
    label: 'Epost',
  },
  {
    value: 'adresse',
    label: 'Brev',
  },
];

const S = {
  Div: styled.div`
    display: grid;
    grid-gap: 1rem;
    grid-template-rows: repeat(1fr);
    max-width: 500px;
    width: 100%;
    margin: 0 auto;
  `,
};

// eslint-disable-next-line @typescript-eslint/ban-types
const InvoiceArea: FC<{}> = () => {
  const { values }: FormikProps<FormikValues> = useFormikContext();
  return (
    <Area title="Fakturainformasjon">
      <TextField name="orgnr" label="Organisasjonsnummer" placeholder="Bedrift AS" />
      <Select
      name="delivery"
      options={delivery}
      label="delivery"
      />
      {(values.delivery !== "ehf" && values.delivery !== "") ? (
        <TextField name="deliveryLocation" label={values.delivery} placeholder={`Ønsket ${values.delivery}`} />
      ): null}
      <S.Div>
      <ExtraInfo name="ponumber" label="PO nummer"/>
      <ExtraInfo name="duedate" label="spesiell forfallsdato"/>
      </S.Div>
    </Area>
  )};

export default InvoiceArea;
