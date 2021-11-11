import { FormData } from '../../../src/common/FormData';

const slugToText = (slug: string): string => {
  switch (slug) {
    case 'bedpres':
      return 'Bedriftsarrangement';
    case 'kurs':
      return 'Kurs';
    case 'offline':
      return 'Annonse i Offline';
    case 'online_ad':
      return 'Stillingsutlysning';
    case 'techtalks':
      return 'Tech talks';
    case 'excursion':
      return 'IT-ekskrusjon';
    case 'other':
      return 'Annet';
    default:
      return '';
  }
};

export const getFormattedData = (form: FormData, isConfirmMail: boolean) => {
  const {
    companyName,
    orgnr,
    contactName,
    contactMail,
    phone,
    comments,
    occation,
    ponumber,
    isponumber,
    duedate,
    isduedate,
    delivery,
    deliveryAdress,
  } = form;
  const intro = isConfirmMail
    ? 'Vi vil meddele at deres fakturainformasjon med følgende data har blitt sendt inn:'
    : 'En bedrift har sendt inn fakturainformasjon';
  return `
      <p>${intro}</p>
      <p><strong>Bedrift</strong></p>
      <p>Bedriftsnavn: ${companyName}<br><br></p>
      <p>Organisjansjonsnummer: ${orgnr}<br><br></p>
      <p><strong>Kontaktperson</strong></p>
      <p>Navn: ${contactName}</p>
      <p>E-post: ${contactMail}</p>
      <p>Telefon: ${phone} <br><br></p>
      <p><strong>anledning: ${slugToText(occation)}</strong></p>
      <p><strong>Ekstra info:</strong></p>
      ${isponumber ? `<p>Ponummer: ${ponumber} <br><br></p>` : ''}
      ${isduedate ? `<p>Forfallsdato: ${duedate} <br><br></p>` : ''}
      <p>leveringsmetode: ${delivery}<br><br></p>
      ${delivery == 'epost' ? `<p>Epost for levering: ${deliveryAdress} <br><br></p>` : ''}
      ${delivery == 'adresse' ? `<p>Adresse for levering: ${deliveryAdress} <br><br></p>` : ''}
      <p><strong>Kommentarer</strong></p>
      <p>${comments}</p>
  `;
};
