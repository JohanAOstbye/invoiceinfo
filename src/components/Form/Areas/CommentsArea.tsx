import React from 'react';
import Area from '../../Area';
import TextArea from '../../Inputs/TextArea';

const CommentsArea = (): JSX.Element => (
  <Area title="Kommentarer">
    <TextArea
      name="comments"
      placeholder="Dersom dere har noen ønsker utover det som er fylt inn ovenfor, vennligst skriv her"
    />
  </Area>
);

export default CommentsArea;
