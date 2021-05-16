import { FormikProps, FormikValues, useFormikContext } from 'formik';
import React, {FC, useEffect } from 'react';
import Checkbox from './Checkbox';
import TextField from './TextField';

interface ExtraInfoProps {
  name: string;
  label: string;
}

const ExtraInfo: FC<ExtraInfoProps> = ({ name, label }) => {
    const { values }: FormikProps<FormikValues> = useFormikContext();

    // eslint-disable-next-line @typescript-eslint/no-empty-function
    useEffect(() => {

    }, [values])

  const boolname = `is${name}`
  return (
    <div>
      <Checkbox label={`Ønsker ${label}`} name={boolname} value={boolname} />
      {values[boolname] ? <TextField name={name} placeholder={label} /> : null}
    </div>
  )
};

export default ExtraInfo;
