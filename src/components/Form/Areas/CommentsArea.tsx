import React from 'react';
import Area from '../../Area';
import TextArea from '../../Inputs/TextArea';

const CommentsArea = () => (
    <Area title="Kommentarer">
      <TextArea
        name="comments"
        placeholder="Om dere har noen ønsker utover infoen her"
      />
    </Area>
  );

export default CommentsArea;
