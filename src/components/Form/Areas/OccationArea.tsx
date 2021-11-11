import React, { FC } from 'react';
import Area from '../../Area';
import Select, { OptionType } from '../../Inputs/Select';

// Bedriftsarrangement, Annonse i Offline, Stillingsutlysning, Tech Talks og IT-ekskursjonen.
const occations: OptionType[] = [
  {
    value: 'bedpres',
    label: 'Bedriftsarrangement',
  },
  {
    value: 'kurs',
    label: 'Kurs',
  },
  {
    value: 'offline',
    label: 'Annonse i Offline',
  },
  {
    value: 'online_ad',
    label: 'Stillingsutlysning',
  },
  {
    value: 'techtalks',
    label: 'Tech Talks',
  },
  {
    value: 'excursion',
    label: 'IT-ekskursjonen',
  },
  {
    value: 'other',
    label: 'Annet',
  },
];

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
// eslint-disable-next-line @typescript-eslint/ban-types
const OccationArea: FC<{}> = () => (
  <Area title="Velg anledningen fakturaen skal sendes for">
    <Select name="occation" options={occations} label="Anledning" />
  </Area>
);

export default OccationArea;
