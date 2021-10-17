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
      return 'Andre';
    default:
      return '';
  }
};

export const getFormattedData = (form: FormData, isConfirmMail: boolean) => {
  const { companyName, orgnr, contactName, contactMail, phone, comments, occation, ponumber, isponumber, duedate, isduedate, deliveryAdress } = form;
  const intro = isConfirmMail
    ? 'Vi vil meddele at deres fakturainformasjon med følgende data har blitt sendt inn:'
    : 'En bedrift har sendt inn fakturainformasjon';
  return `
      <p>${intro}</p>
      <p><strong>Bedrift</strong></p>
      <p>Bedriftsnavn: ${companyName}<br><br></p>
      <p><strong>Kontaktperson</strong></p>
      <p>Navn: ${contactName}</p>
      <p>E-post: ${contactMail}</p>
      <p>Telefon: ${phone} <br><br></p>
      <p><strong>anledning: ${occation}</strong></p>
      <p><strong>Ekstra info:</strong></p>
      ${isponumber ? `<p>Ponummer: ${ponumber} <br><br></p>`: "fdf"}
      <p><strong>Kommentarer</strong></p>
      <p>${comments}</p>
  `;
};
