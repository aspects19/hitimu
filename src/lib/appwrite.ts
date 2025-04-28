import { Client, Account} from 'appwrite';

export const client = new Client();

client
.setEndpoint('https://fra.cloud.appwrite.io/v1')
.setProject('6809ec0600316ea99779');

export const account = new Account(client);
export { ID } from 'appwrite';
