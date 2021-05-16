import React from 'react';
import Area from '../../Area';
import TextField from '../../Inputs/TextField';

const ContactPersonArea = (): JSX.Element => (
  <Area title="Kontaktperson">
    <TextField label="Navn" name="contactName" placeholder="Ole Nordmann" />
    <TextField name="contactMail" type="email" label="E-post" placeholder="olenordmann@bedrift.com" />
    <TextField name="phone" type="tel" label="Telefonnummer" placeholder="+47 404 69 418" />
  </Area>
);

export default ContactPersonArea;
