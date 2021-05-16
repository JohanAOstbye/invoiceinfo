import { Spinner, Message } from '@dotkomonline/design-system';
import React, { FC } from 'react';

interface SubmitStatusProps {
  loading: boolean;
  submitCount: number;
  isValid: boolean;
  hasError: boolean;
  submitted: boolean;
}

// TODO: sett opp validering
const SubmitStatus: FC<SubmitStatusProps> = ({ loading, submitCount, isValid, submitted, hasError }) => {
  if (loading) return <Spinner />;
  if (hasError)
    return (
      <Message status="error">
        Noe gikk galt under innsending av fakturainformasjonen, Venligst send en beskrivende mail
      </Message>
    );
  if (submitted) return <Message status="success">Fakturainformasjon har blitt sendt inn</Message>;
  if (submitCount > 0 && !isValid)
    return <Message status="error">Venligst sjekk alle at alle feltene er gyldig</Message>;
  return <div />;
};

export default SubmitStatus;
