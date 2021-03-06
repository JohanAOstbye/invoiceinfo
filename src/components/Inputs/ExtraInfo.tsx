import { FormikProps, FormikValues, useFormikContext } from 'formik';
import React, { FC, useEffect } from 'react';
import Checkbox from './Checkbox';
import NumberField from './NumberField';
import TextField from './TextField';

interface ExtraInfoProps {
  name: string;
  label: string;
  placeholder?: string;
  number?: boolean;
}

const ExtraInfo: FC<ExtraInfoProps> = ({ name, label, placeholder = '', number }) => {
  const { values }: FormikProps<FormikValues> = useFormikContext();
  const boolname = `is${name}`;

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  useEffect(() => {}, [values[name]]);

  return (
    <div>
      <Checkbox label={`Ønsker ${label}`} name={boolname} />
      {values[boolname] ? (
        <>
          <br />
          {number ? (
            <NumberField name={name} placeholder={placeholder} />
          ) : (
            <TextField name={name} placeholder={placeholder} />
          )}
        </>
      ) : null}
    </div>
  );
};

export default ExtraInfo;
