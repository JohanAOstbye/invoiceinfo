import AWS from 'aws-sdk';
import { GetObjectRequest } from 'aws-sdk/clients/s3';

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

export const getAuthFile = async (): Promise<null | GoogleAuthFile> => {
  AWS.config.update({ region: 'eu-west-1' });

  const s3 = new AWS.S3();

  const options: GetObjectRequest = {
    Bucket: 'interest-mailer-authfile',
    Key: 'gsuite.json',
  };

  const res = await s3.getObject(options).promise();
  if (res.Body) {
    const data = await JSON.parse(res.Body.toString('utf-8'));
    return data;
  }
  return null;
};
