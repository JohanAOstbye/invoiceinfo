import * as Yup from 'yup';

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
  Organisjonsnummer: Yup.string()
    .required('Dette feltet er påkrevd'),
  comments: Yup.string().notRequired().max(2000, 'Prøv å skriv under 2000 tegn'),
});
