import { Client, Databases, Account, Storage, Avatars } from "appwrite";

export const config = {
    endpoint: "https://fra.cloud.appwrite.io/v1",
    projectId: "6809ec0600316ea99779",
    databaseId: "6809f48c0027dc444c5a",
    usersCollectionId: "6809faa20015a4bdb450",
    documentCollectionId: "6809f99a0011079b78da",
    documentBucketId: "6809fbc0000918e1e9b9",
    profileBucketId: "6809fbd3001876b6c1ce",
    collectionId: "6809fbc0000918e1e9b7",
};

const client: Client = new Client();

client
    .setEndpoint(config.endpoint) 
    .setProject(config.projectId); 

export const account: Account = new Account(client);
export const database: Databases = new Databases(client);
export const storage: Storage = new Storage(client);
export const avatars: Avatars = new Avatars(client);

