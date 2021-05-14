import { Handler } from 'aws-lambda';
import { INVALID_DATA, Response, INVALID_AUTHENTICATION, OkResponse, SERVER_ERROR } from './constants';
import { mailer } from './mailer';
import { FormData } from '../../common/FormData';
import { getAuthFile } from './util/authFile';
import { spreadsheet } from './spreadsheet';

export const handler: Handler = async (event, context, callback): Promise<Response> => {
  if (!event.body) {
    return INVALID_DATA;
  }
  const authFile = await getAuthFile();
  if (!authFile) {
    return INVALID_AUTHENTICATION;
  }

  try {
    const data: FormData = await JSON.parse(event.body);
    await mailer(data, authFile);
    await spreadsheet(data, authFile);
    return OkResponse;
  } catch (err) {
    console.log(err);
    return SERVER_ERROR(err);
  }
};
