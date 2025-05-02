import { Client, Databases, Account, Storage } from "appwrite";

const client: Client = new Client();

client
    .setEndpoint(import.meta.env.VITE_APPWRITE_ENDPOINT)
    .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID); 

export const account: Account = new Account(client);
export const database: Databases = new Databases(client);
export const storage: Storage = new Storage(client);

