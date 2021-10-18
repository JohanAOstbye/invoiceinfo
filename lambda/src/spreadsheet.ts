import { GoogleSpreadsheet } from 'google-spreadsheet';
import { GoogleAuthFile, googleAuthKeys } from './util/authFile';
import { SPREADSHEET_ID } from './constants';
import { FormData } from '../../src/common/FormData';

export const spreadsheet = async (data: FormData, authFile: GoogleAuthFile): Promise<boolean> => {
  const { companyName, orgnr, contactName, contactMail, phone, comments, occation, ponumber, duedate, deliveryAdress } = data;
  if (SPREADSHEET_ID !== undefined) {
    throw new Error('Spreadsheet not found');
  }
  const doc = new GoogleSpreadsheet(SPREADSHEET_ID);
  await doc.useServiceAccountAuth(authFile);
  await doc.loadInfo();

  const sheet = doc.sheetsByIndex[0];
  const row = {
    companyName,
    orgnr,
    contactName,
    contactMail,
    phone: phone as string,
    comments,
    bedpres: false,
    kurs: false,
    offline: false,
    online_ad: false,
    techtalks: false,
    excursion: false,
    other: false,
    ponumber,
    duedate,
    deliveryAdress,
  };
  row[occation] = true;

  await sheet.addRow(row);
  return true;
};
