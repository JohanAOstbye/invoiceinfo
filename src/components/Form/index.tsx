import { Formik } from 'formik';
import React, { FormEvent, useState } from 'react';
import styled from 'styled-components';
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

const Form = styled.form`
  height: 100%;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3), inset 0 0 40px rgba(0, 0, 0, 0.1);
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem 0;
`;

const InterestForm = (): JSX.Element => {
  const [submitted, setSubmitted] = useState(false);
  const [hasError, setHasError] = useState(false);

  const initialValues: FormData = {
    companyName: '',
    contactName: '',
    contactMail: '',
    phone: '',
    occation: 'other',
    orgnr: '',
    delivery: '',
    deliveryAdress: '',
    comments: '',
    isduedate: false,
    duedate: '',
    isponumber: false,
    ponumber: '',
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={async (values) => {
        try {
          const res = await fetch(`https://dg34nuugf4.execute-api.eu-west-1.amazonaws.com/prod/sendMail`, {
            method: 'post',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(values),
          });
          if (res.status === 200) setSubmitted(true);
        } catch (err) {
          // eslint-disable-next-line no-console
          console.log(err);
          setHasError(true);
        }
      }}
      validationSchema={ValidationSchema}
    >
      {({ isSubmitting, setSubmitting, submitForm, errors, submitCount }) => {
        const submit = async (e: FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          await submitForm().then(() => setSubmitting(false));
        };
        // Checks if errors is empty. 0 will turn into true, anything else is false
        const isValid = !Object.keys(errors).length;
        console.log(errors)
        return (
          <Form>
            <Banner />
            <InformationArea />
            <CompanyArea />
            <ContactPersonArea />
            <OccationArea />
            <InvoiceArea />
            <CommentsArea />
            <SubmitArea
              onClick={submit}
              loading={isSubmitting}
              submitted={submitted}
              isValid={isValid}
              submitCount={submitCount}
              hasError={hasError}
            />
          </Form>
        );
      }}
    </Formik>
  );
};

export default InterestForm;
