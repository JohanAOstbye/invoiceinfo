import { Formik } from 'formik';
import React, { useState } from 'react';
import { Box } from '@dotkomonline/yacl';
import { useToast } from '@chakra-ui/react';
import { FormData } from '../../common/FormData';
import { ValidationSchema } from '../../common/ValidaitonSchema';
import InformationArea from './Areas/InformationArea';
import { Banner } from '../Banner';
import CompanyArea from './Areas/CompanyArea';
import ContactPersonArea from './Areas/ContactPersonArea';
import OccationArea from './Areas/OccationArea';
import CommentsArea from './Areas/CommentsArea';
import SubmitArea from './Areas/SubmitArea';
import InvoiceArea from './Areas/InvoiceArea';

const InterestForm = (): JSX.Element => {
  const [submitted, setSubmitted] = useState(false);
  const [hasError, setHasError] = useState(false);
  const toast = useToast();

  const initialValues: FormData = {
    companyName: '',
    contactName: '',
    contactMail: '',
    phone: '',
    occation: '',
    orgnr: '',
    delivery: '',
    deliveryAdress: '',
    comments: '',
    isduedate: false,
    duedate: '',
    isponumber: false,
    ponumber: '',
  };

  const errormap = new Map([
    ['companyName', 'bedriftsnavn'],
    ['contactName', 'kontaktperon - navn'],
    ['contactMail', 'kontaktperon - mail'],
    ['phone', 'kontaktperon - telefonnummer'],
    ['occation', 'anledning'],
    ['orgnr', 'organisasjonsnummer'],
    ['delivery', 'leveringsmetode'],
    ['deliveryAdress', 'Adresse - leveringsmetode'],
    ['comments', 'kommetarer'],
    ['duedate', 'forfallsdato'],
    ['ponumber', 'ponummer'],
  ]);

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={async (values) => {
        try {
          const res = await fetch(`https://3lnowj2e0k.execute-api.eu-north-1.amazonaws.com/prod/sendMail`, {
            method: 'post',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(values),
          });
          if (res.status === 200) setSubmitted(true);
        } catch (err) {
          setHasError(true);
        }

        if (hasError)
          toast({
            title: 'Sending feilet!',
            description: 'Noe gikk galt under innsending av fakturainformasjonen, Venligst send en beskrivende mail',
            status: 'error',
            duration: 9000,
            isClosable: true,
          });

        if (submitted)
          toast({
            title: 'Fakturainformasjon sendt!',
            description: 'en konfirmasjonsmail vil bli sendt til kontakt mail',
            status: 'success',
            duration: 9000,
            isClosable: true,
          });
      }}
      validationSchema={ValidationSchema}
    >
      {({ isSubmitting, setSubmitting, submitForm, errors, submitCount }) => {
        const isValid = !Object.keys(errors).length;
        const newErrors = Object.keys(errors).map((err) => errormap.get(err));
        const submit = async (e: { preventDefault: () => void }) => {
          e.preventDefault();
          await submitForm().then(() => {
            setSubmitting(false);
          });
        };

        // Checks if errors is empty. 0 will turn into true, anything else is false
        return (
          <Box>
            <Banner />
            <InformationArea />
            <CompanyArea />
            <ContactPersonArea />
            <OccationArea />
            <InvoiceArea />
            <CommentsArea />
            <SubmitArea
              loading={isSubmitting}
              submit={submit}
              submitCount={submitCount}
              isInvalid={!isValid}
              errors={newErrors.join(', ')}
            />
          </Box>
        );
      }}
    </Formik>
  );
};

export default InterestForm;
