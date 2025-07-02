import { account, avatars, database } from "../lib/appwrite";
import { ID } from "appwrite";
import {createContext,useEffect, useState, useContext,  } from "react";

import type { Models } from "appwrite";

import { config } from "../lib/appwrite";


type UserContextType = {
  user: Models.User<object> | null;
  isLoading: boolean;
  initUser: () => Promise<void>;
  signup: (email: string, password: string, name: string) => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({children}: {children: React.ReactNode} ) {
  const [user, setUser] = useState<Models.User<object> | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function initUser() {
    try {
      const accountData = await account.get();
      setUser(accountData);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      setUser(null);
    } 
  }

  async function signup(email: string, password: string, name: string) {
    try {
      setIsLoading(true)
      const newAccount = await account.create(ID.unique(), email, password, name);
      if (!newAccount) throw new Error("Error creating account");

      const avatarURL = avatars.getInitials(name);

      await login(email, password);

      await database.createDocument(
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
      
    } finally {
      setIsLoading(false)
    }
  }

  async function login(email: string, password: string) {
    setIsLoading(true)
    try {
      await account.createEmailPasswordSession(email, password);
      const accountData = await account.get();
      setUser(accountData);

    }finally {
      setIsLoading(false)
    }
  };

  async function logout() {
    await account.deleteSession("current");
    setUser(null);
  }


  useEffect(() => {
    initUser();
  }, []);

  return (
    <UserContext.Provider value={{ user, initUser, signup, login, logout, isLoading  }}>
      {children}
    </UserContext.Provider>
  );
};


export function useUser() {
  const ctx = useContext(UserContext);
  if (!ctx) throw new Error("UseUser must be used inside userprovider");
  return ctx;
}