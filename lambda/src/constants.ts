export const SENDER_EMAIL = process.env.SENDER || 'invoice-bot@online.ntnu.no';
export const LOGIN_EMAIL = process.env.client_email || 'fakturainformasjon@invoice-info-online.iam.gserviceaccount.com';
export const RECIEVER = 'fakturainformasjon@online.ntnu.no';

interface Header {
  'Access-Control-Allow-Origin': '*';
}
export interface Response {
  statusCode: number;
  body: string;
  headers: Header;
}

export const INVALID_DATA: Response = {
  statusCode: 400,
  body: 'Sent data is invalid',
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
};

export const SERVER_ERROR = (err: string | unknown): Response => {
  if (typeof err == 'string') {
    err = err;
  } else {
    err = JSON.stringify(err);
  }
  return {
    statusCode: 500,
    body: `Something went wrong on the server!`,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  };
};

export const INVALID_AUTHENTICATION: Response = {
  statusCode: 403,
  body: 'Invalid authentication to mail account',
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
};

export const OkResponse: Response = {
  statusCode: 200,
  body: 'Everything went well',
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
};
