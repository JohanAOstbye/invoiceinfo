import AWS from 'aws-sdk';
import { GetObjectRequest } from 'aws-sdk/clients/s3';
import { env } from 'process';

export interface GoogleAuthFile {
  type: string;
  project_id: string;
  private_key_id: string;
  private_key: string;
  client_email: string;
  client_id: string;
  auth_uri: string;
  token_uri: string;
  auth_provider_x509_cert_url: string;
  client_x509_cert_url: string;
}

export const googleAuthKeys = [
  'type',
  'project_id',
  'private_key_id',
  'private_key',
  'client_email',
  'client_id',
  'auth_uri',
  'token_uri',
  'auth_provider_x509_cert_url',
  'client_x509_cert_url',
];

export const getAuthFile = () => {
  const authfile: GoogleAuthFile = {
    type: '',
    project_id: '',
    private_key_id: '',
    private_key: '',
    client_email: '',
    client_id: '',
    auth_uri: '',
    token_uri: '',
    auth_provider_x509_cert_url: '',
    client_x509_cert_url: '',
  };
  if (googleAuthKeys.filter((key) => key in env).length == 0) {
    authfile.type = String(env.type);
    authfile.project_id = String(env.project_id);
    authfile.private_key_id = String(env.private_key_id);
    if (env.private_key) authfile.private_key = env.private_key;
    authfile.client_email = String(env.client_email);
    authfile.client_id = String(env.client_id);
    authfile.auth_uri = String(env.auth_uri);
    authfile.token_uri = String(env.token_uri);
    authfile.auth_provider_x509_cert_url = String(env.auth_provider_x509_cert_url);
    authfile.client_x509_cert_url = String(env.client_x509_cert_url);
  }
  return authfile;
};
// export const getAuthFile = async (): Promise<null | GoogleAuthFile> => {
//   AWS.config.update({ region: 'eu-north-1' });

//   const s3 = new AWS.S3();

//   const options: GetObjectRequest = {
//     Bucket: 'interest-mailer-authfile',
//     Key: 'gsuite.json',
//   };

//   const res = await s3.getObject(options).promise();
//   if (res.Body) {
//     const data = await JSON.parse(res.Body.toString('utf-8'));
//     return data;
//   }
//   return null;
// };
