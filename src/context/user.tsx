import { account, storage, avatars, database } from "../lib/appwrite";
import { ID } from "appwrite";
import {createContext,useEffect, useState, useContext,  } from "react";

import { config } from "../lib/appwrite";

type User = {
  $id: string,
  name: string,
  email: string,
} | null;

type UserContextType = {
  user: User;
  initUser: () => Promise<void>;
  signup: (email: string, password: string, name: string) => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  upload: (file: File) => Promise<void>;
};

const UserContext = createContext<UserContextType | undefined>(undefined);


export function UserProvider({children}: {children: React.ReactNode} ) {
  const [user, setUser] = useState<User>(null);

  async function initUser() {
    try {
      const accountData = await account.get();
      setUser(accountData);
    } catch (err) {
      setUser(null);
      console.log(err); 
    } 
  }

  async function signup(email: string, password: string, name: string) {
    try {
      const newAccount = await account.create(ID.unique(), email, password, name);
      if (!newAccount) throw new Error("Error creating account");

      const avatarURL = avatars.getInitials(name);

      await login(email, password);

      const newUser = await database.createDocument(
        config.databaseId,
        config.usersCollectionId,
        ID.unique(),
        {
          accountId: newAccount.$id,
          email,
          name,
          avatar: avatarURL,
        }
      )
      console.log("User created successfully:", newUser);
      
    } catch (err) {
      console.error("Error creating account:", err);
      throw err;
    }  
  }

  async function login(email: string, password: string) {
    try {
      await account.createEmailPasswordSession(email, password);
      const accountData = await account.get();
      setUser(accountData);
    } catch (err) {
      console.error("Error logging in:", err);
      throw err;
    }
  };

  async function logout() {
    await account.deleteSession("current");
    setUser(null);
  }

  async function upload(file:File) {
    try {
      if (!file) {
        alert('Please select a file to upload.');
        return;
      }
      const fileId = ID.unique();

      const response = await storage.createFile(config.documentBucketId, fileId, file);
      console.log("File uploaded successfully:", response);
    } catch (error) {
      console.error("Error uploading file:", error);
      throw error;  
    } 
  }


  useEffect(() => {
    initUser();
  }, []);

  return (
    <UserContext.Provider value={{ user, initUser, signup, login, logout, upload }}>
      {children}
    </UserContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export function useUser() {
  const ctx = useContext(UserContext);
  if (!ctx) throw new Error("UseUser must be used inside userprovider");
  return ctx;
}