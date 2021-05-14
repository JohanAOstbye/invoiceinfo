import React from 'react';
import Area from '../../Area';
import TextArea from '../../Inputs/TextArea';

const CommentsArea = () => {
  return (
    <Area title="Kommentarer">
      <TextArea
        name="comments"
        placeholder="Gjerne utdyp om dere har tanker om hvordan et arrangement kan se ut eller annet
relevant. Still også spørsmål her om dere lurer på noe."
      />
    </Area>
  );
};

export default CommentsArea;
