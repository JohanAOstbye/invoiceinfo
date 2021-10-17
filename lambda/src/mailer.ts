import nodemailer from 'nodemailer';
import { ValidationError } from 'yup';
import { RECIEVER, SENDER_EMAIL } from './constants';
import { getFormattedData } from './util/MailFormatters';
import { ValidationSchema } from '../../src/common/ValidaitonSchema';
import { FormData } from '../../src/common/FormData';
import { GoogleAuthFile } from './util/authFile';

export const mailer = async (data: FormData, authFile: GoogleAuthFile): Promise<boolean> => {
  // Validates incomming data
  await ValidationSchema.validate(data).catch((err: ValidationError) => {
    console.log(err);
    throw err;
  });
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      type: 'OAuth2',
      user: SENDER_EMAIL,
      serviceClient: authFile.client_id,
      privateKey: authFile.private_key,
    },
  });

  await transporter.verify();
  // Sends mail to bedkom
  await transporter.sendMail({
    from: SENDER_EMAIL,
    to: RECIEVER,
    subject: `[Interesse] ${data.companyName}`,
    html: getFormattedData(data, false),
  });

  // Sends confirmation mail to the contact person
  await transporter.sendMail({
    from: SENDER_EMAIL,
    to: data.contactMail,
    subject: `Deres interesse har blitt meldt`,
    html: getFormattedData(data, true),
  });
  return true;
};
