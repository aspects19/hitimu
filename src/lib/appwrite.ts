import { Client, Databases, Account, Storage, Avatars, ID, Query } from "appwrite";
import type { Models } from "appwrite";

export const config = {
    endpoint: "https://fra.cloud.appwrite.io/v1",
    projectId: "6809ec0600316ea99779",
    databaseId: "6809f48c0027dc444c5a",
    usersCollectionId: "6809faa20015a4bdb450",
    documentCollectionId: "6809f99a0011079b78da",
    documentBucketId: "6809fbc0000918e1e9b9",
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

export const uploadFile = async (userId: string, file: File, description: string) => {
    const response = await storage.createFile(
        config.documentBucketId, 
        ID.unique(), 
        file,
        ['read("any")']
      );

    const fileUrl = storage.getFileView(
        config.documentBucketId, 
        response.$id
    );

    await database.createDocument(
        config.databaseId,
        config.documentCollectionId,
        ID.unique(),
        {
            documentId: response.$id,
            title: file.name,
            description: description,
            documentUrl: fileUrl,
            createdAt: new Date().toISOString(),
            user: userId,
        },
        ['read("any")', `write("user:${userId}")`]
    );
};

export const getFilePreview = async (fileId: string): Promise<string> => {
    const filePreview = storage.getFilePreview(
        config.documentBucketId,
        fileId,
        200,
        200,
    );
    return filePreview;
}

export const getUserDocs = async (userId: string, limit: number = 10): Promise<Models.Document[]> => {
    
    const posts = await database.listDocuments(
        config.databaseId,
        config.documentCollectionId,
        [Query.equal("user", userId), Query.limit(limit)]
    );
    
    return posts.documents;

};

export const getSearchDocs = async (query: string, limit: number = 10 ): Promise<Models.Document[]> => {
    const queries = [Query.limit(limit)]
    if (query && query.trim() !== "") {queries.push(Query.search("title", query))}
    console.log(queries);
    
    const posts = await database.listDocuments(
        config.databaseId,
        config.documentCollectionId,
        queries
    );
    return posts.documents;
    
}