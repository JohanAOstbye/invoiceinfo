import React from 'react';
import styled from 'styled-components';
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
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const OccationArea = () => (
  <Area title="Velg anledningen fakturaen skal sendes for">
    <S.Div>
      <Select name="occation" options={occations} label="Anledning" />
    </S.Div>
  </Area>
);

export default OccationArea;
