import { FormData } from '../../../common/FormData';

const slugToText = (slug: string): string => {
  switch (slug) {
    case 'bedpres':
      return 'Bedriftsarrangement';
    case 'offline':
      return 'Annonse i Offline';
    case 'online_ad':
      return 'Stillingsutlysning';
    case 'techtalks':
      return 'Tech talks';
    case 'excursion':
      return 'IT-ekskrusjon';
    default:
      return '';
  }
};

export const getFormattedData = (form: FormData, isConfirmMail: boolean) => {
  const { companyName, comments, contactName, contactMail, phone, interests } = form;
  const intro = isConfirmMail
    ? 'Vi vil meddele at deres interesse med følgende data har blitt sendt inn:'
    : 'En bedrift har meldt interesse';
  const interestText = interests.map((interest) => `<li>${slugToText(interest)}</li>`).join('');
  return `
      <p>${intro}</p>
      <p><strong>Bedrift</strong></p>
      <p>Bedriftsnavn: ${companyName}<br><br></p>
      <p><strong>Kontaktperson</strong></p>
      <p>Navn: ${contactName}</p>
      <p>E-post: ${contactMail}</p>
      <p>Telefon: ${phone} <br><br></p>
      <p><strong>Interesser</strong></p>
      <ul>
      ${interests ? interestText : 'Bedriften har ikke valgt noen interesser'}
      </ul><br><br>
      <p><strong>Kommentarer</strong></p>
      <p>${comments}</p>
  `;
};
