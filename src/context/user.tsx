import { account } from "../lib/appwrite";
import { ID } from "appwrite";
import {createContext,useEffect, useState, useContext,  } from "react";

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
    await account.create(ID.unique(), email, password, name);
    await login(email, password);
    
  }

  async function login(email: string, password: string) {
    await account.createEmailPasswordSession(email, password);
    const accountData = await account.get();
    setUser(accountData);
    
  };

  async function logout() {
    await account.deleteSession("current");
    setUser(null);
    
  }

  useEffect(() => {
    initUser();
  }, []);

  return (
    <UserContext.Provider value={{ user, initUser, signup, login, logout }}>
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