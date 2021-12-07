import React, { FC } from 'react';
import { FormikProps, FormikValues, useFormikContext } from 'formik';
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

// eslint-disable-next-line @typescript-eslint/ban-types
const InvoiceArea: FC<{}> = () => {
  const { values }: FormikProps<FormikValues> = useFormikContext();
  return (
    <Area title="Fakturainformasjon">
      <Select name="delivery" options={delivery} label="Leveringsmetode" />
      {values.delivery !== 'ehf' && values.delivery !== '' ? (
        <TextField name="deliveryAdress" label={values.delivery} placeholder={`Ønsket ${values.delivery}`} />
      ) : null}
      <ExtraInfo name="ponumber" label="PO-nummer" placeholder="PO-nummer" />
      <ExtraInfo name="duedate" label="spesiell antall dager til forfallsdato" placeholder="antall dager" number />
    </Area>
  );
};

export default InvoiceArea;
