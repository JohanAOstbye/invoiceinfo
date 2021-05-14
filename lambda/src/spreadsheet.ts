import { GoogleSpreadsheet } from 'google-spreadsheet';
import { GoogleAuthFile } from './util/authFile';
import { SPREADSHEET_ID } from './constants';
import { FormData } from '../../common/FormData';

export const spreadsheet = async (data: FormData, authFile: GoogleAuthFile): Promise<boolean> => {
  const { companyName, contactName, contactMail, phone, interests, comments } = data;
  if (!SPREADSHEET_ID) {
    throw new Error('Spreadsheet not found');
  }
  const doc = new GoogleSpreadsheet(SPREADSHEET_ID);
  await doc.useServiceAccountAuth(authFile);
  await doc.loadInfo();

  const sheet = doc.sheetsByIndex[0];
  const row = {
    companyName,
    contactName,
    contactMail,
    phone: phone as string,
    comments,
    bedpres: false,
    offline: false,
    online_ad: false,
    techtalks: false,
    excursion: false,
  };
  interests.forEach((interest) => {
    row[interest] = true;
  });

  await sheet.addRow(row);
  return true;
};
