import * as Yup from 'yup';
import axios from 'axios';

export const ValidationSchema = Yup.object().shape({
  companyName: Yup.string().required('Dette feltet er påkrevd').max(250, 'Navnet er for langt'),
  contactName: Yup.string().required('Dette feltet er påkrevd').max(150, 'Navnet er for langt'),
  contactMail: Yup.string()
    .required('Dette feltet er påkrevd')
    .email('Ugyldig format på mailen')
    .max(200, 'Mailen er for lang'),
  phone: Yup.string()
    .required('Dette feltet er påkrevd')
    .matches(/([+]{0,1}[0-9\s]+)/, 'Telefonnummer er ugyldig og bør kun inneholde tall og maks 1 "+"')
    .min(8, 'Telefonnummer for kort!')
    .max(16, 'Telefonnummeret er for langt!'),
  occation: Yup.string().required('Dette feltet er påkrevd'),
  orgnr: Yup.string()
    .min(9, 'Organisasjonsnummeret må være 9 siffre')
    .max(9, 'Organisasjonsnummeret må være 9 siffre')
    // eslint-disable-next-line no-async-promise-executor
    .test(
      'validateOrgnr',
      'Organisasjonsnummeret finnes ikke i Brønnøysundregistrene',
      (value) =>
        new Promise((resolve) => {
          if (value && value.length === 9) {
            axios
              .get(`https://data.brreg.no/enhetsregisteret/api/enheter/${encodeURIComponent(value)}`)
              .then(() => {
                resolve(true);
              })
              .catch(() => {
                resolve(false);
              });
          }
        })
    )
    .required('Dette feltet er påkrevd'),
  delivery: Yup.string().required('Dette feltet er påkrevd'),
  deliveryAdress: Yup.string().when('delivery', {
    is: (delivery: string) => delivery === 'epost' || delivery === 'adresse',
    then: Yup.string().required('Dette feltet er påkrevd'),
  }),
  comments: Yup.string().notRequired().max(2000, 'Prøv å skriv under 2000 tegn'),
  isduedate: Yup.boolean(),
  duedate: Yup.string().when('isduedate', {
    is: (isduedate: boolean) => isduedate,
    then: Yup.string().required('Dette feltet er påkrevd'),
  }),
  isponumber: Yup.boolean(),
  ponumber: Yup.string().when('isponumber', {
    is: (isponumber: boolean) => isponumber,
    then: Yup.string().required('Dette feltet er påkrevd'),
  }),
});
