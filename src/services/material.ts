// funvtion to upload material and also write to appwrite documents collection

import { ID } from "appwrite";
import { storage } from "../lib/appwrite";
// import { useState } from "react";

// TODO: add title: string, subject: string, description: string
export async function uploadMaterial(file: File, ) {
    const fileId = ID.unique();
    const bucketId = import.meta.env.VITE_APPWRITE_BUCKET_ID;
    console.log(bucketId);
    
    // const documentId = ID.unique();
    // const collectionId = import.meta.env.VITE_APPWRITE_COLLECTION_ID;

    // Upload the file to Appwrite Storage
    try {
        const response = await storage.createFile(bucketId, fileId, file);
        console.log("File uploaded successfully:", response);
        return response; // Return the response for further processing if needed
    } catch (error) {
        console.error("Error uploading file:", error);
        throw error; 
        
    }
    

    // Create a document in Appwrite Database
    // await database.createDocument(
    //     collectionId,
    //     documentId,
    //     {
    //         title,
    //         subject,
    //         description,
    //         fileId,
    //     }
    // );
}