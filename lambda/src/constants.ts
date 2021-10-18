export const SENDER_EMAIL = process.env.SENDER || 'bedrift-interesse@online.ntnu.no';
export const RECIEVER = process.env.RECIEVER;
export const SPREADSHEET_ID = process.env.SHEET_ID;

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
  if(typeof err == "string") {
    err = err
  } else {
    err = JSON.stringify(err);
  }
  return {
    statusCode: 500,
    body: `Something went wrong on the server!\n${err}`,
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
