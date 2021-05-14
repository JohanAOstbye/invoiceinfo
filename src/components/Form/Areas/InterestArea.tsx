import React from 'react';
import styled from 'styled-components';
import Area from 'src/components/Area';
import Checkbox from 'src/components/Inputs/Checkbox';
import { Paragraph } from '@dotkomonline/design-system';
import { Interest } from 'common/FormData';

interface CheckboxItem {
  label: string;
  value: Interest;
}

// Bedriftsarrangement, Annonse i Offline, Stillingsutlysning, Tech Talks og IT-ekskursjonen.
const interests: CheckboxItem[] = [
  {
    label: 'Bedriftsarrangement',
    value: 'bedpres',
  },
  {
    label: 'Annonse i Offline',
    value: 'offline',
  },
  {
    label: 'Stillingsutlysning',
    value: 'online_ad',
  },
  {
    label: 'Tech Talks',
    value: 'techtalks',
  },
  {
    label: 'IT-ekskursjonen',
    value: 'excursion',
  },
];

const InterestArea = () => {
  return (
    <Area title="Hva er dere interessert i?">
      <Paragraph>
        Kryss av for det dere vil melde interesse for. Vi vil notere deres interesse, og ta kontakt om dere er aktuelle.
      </Paragraph>
      <S.Div>
        {interests.map((interest) => (
          <Checkbox name="interests" label={interest.label} value={interest.value} key={interest.value} />
        ))}
      </S.Div>
    </Area>
  );
};

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

export default InterestArea;
