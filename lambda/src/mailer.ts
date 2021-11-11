import nodemailer from 'nodemailer';
import { ValidationError } from 'yup';
import { LOGIN_EMAIL, RECIEVER, SENDER_EMAIL } from './constants';
import { getFormattedData } from './util/MailFormatters';
import { ValidationSchema } from '../../src/common/ValidaitonSchema';
import { FormData } from '../../src/common/FormData';
import { GoogleAuthFile } from './util/authFile';

export const mailer = async (data: FormData, authFile: GoogleAuthFile): Promise<boolean> => {
  // Validates incomming data
  await ValidationSchema.validate(data).catch((err: ValidationError) => {
    console.log('mailer vaidation');
    console.log(err);
    throw err;
  });
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      type: 'OAuth2',
      user: LOGIN_EMAIL,
      serviceClient: authFile.client_id,
      privateKey: authFile.private_key,
    },
  });
  try {
    transporter.on('token', (token) => {
      console.log('A new access token was generated');
      console.log('User: %s', token.user);
      console.log('Access Token: %s', token.accessToken);
      console.log('Expires: %s', new Date(token.expires));
    });
    await transporter.verify();
    // Sends mail to bedkom
    await transporter.sendMail({
      from: LOGIN_EMAIL,
      to: 'johan.ostbye@online.ntnu.no',
      subject: `[Fakturainformasjon] ${data.companyName}`,
      html: getFormattedData(data, false),
    });

    // Sends confirmation mail to the contact person
    await transporter.sendMail({
      from: LOGIN_EMAIL,
      to: 'johan.ostbye@online.ntnu.no',
      subject: `Deres Fakturainformasjon har blitt registrert`,
      html: getFormattedData(data, true),
    });
  } catch (err) {
    console.log(err);
  }

  return true;
};
