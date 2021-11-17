import React, { FC, useEffect } from 'react';
import styled from 'styled-components';
import { SubmitButton, ResetButton } from 'formik-chakra-ui';
import { useToast } from '@chakra-ui/react';
import { Stack } from '@dotkomonline/yacl';
import Area from '../../Area';

interface SubmitAreaProps {
  loading: boolean;
  submit: (e: { preventDefault: () => void }) => Promise<void>;
  submitCount: number;
  isInvalid: boolean;
  errors: string;
}

const S = {
  Wrapper: styled.div`
    width: 100%;
    max-width: 500px;
    display: flex;
    justify-content: center;
    gap: 2rem;
  `,
  ButtonDiv: styled.div`
    display: flex;
  `,
};

const SubmitArea: FC<SubmitAreaProps> = ({ ...props }) => {
  const toast = useToast();

  const { loading, submit, submitCount, isInvalid, errors } = props;

  useEffect(() => {
    if (submitCount > 0 && isInvalid) {
      toast({
        id: 'warning',
        title: 'Informasjon mangler',
        description: `Venligst sjekk at disse feltene er fylt ut: ${errors}`,
        status: 'warning',
        duration: 9000,
        isClosable: true,
      });
    }
  }, [submitCount, isInvalid]);

  return (
    <Area>
      <S.Wrapper>
        <Stack direction="row" spacing={4}>
          <SubmitButton
            isLoading={loading}
            loadingText="Submitting"
            colorScheme="blue"
            onClick={(e) => {
              submit(e);
            }}
          >
            Submit
          </SubmitButton>
          <ResetButton colorScheme="blue">reset</ResetButton>
        </Stack>
      </S.Wrapper>
    </Area>
  );
};

export default SubmitArea;
