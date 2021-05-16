import React from 'react';
import Area from '../../Area';
import TextArea from '../../Inputs/TextArea';

const CommentsArea = ():JSX.Element => (
    <Area title="Kommentarer">
      <TextArea
        name="comments"
        placeholder="Om dere har noen ønsker utover infoen dere har fylt inn over, venligst skriv her"
      />
    </Area>
  );

export default CommentsArea;
