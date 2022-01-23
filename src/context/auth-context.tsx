import React, { Children, useContext, useState } from "react";
import * as auth from "auth-provider";
import { UsersProps } from "screens/data.d";
import { useMount } from 'utils';
import { http } from "utils/http";

interface AuthForm {
  username: string;
  password: string;
}

const bootstrapUser = async () => {
  let user = null;
  const token = auth.getToken()
  if(token) {
    let data = await http('me', {token})
    user = data.user
  }
  return user;
}


const AuthContext = React.createContext<
  | {
      user: UsersProps | null;
      login: (form: AuthForm) => Promise<UsersProps>;
      register: (form: AuthForm) => Promise<UsersProps>;
      logout: () => Promise<void>;
    }
  | undefined
>(undefined);

// AuthContext.displayName = "AuthContext";

export const AuthProvider = ({children}: {children: React.ReactNode}) => {
  const [user, setUser] = useState<UsersProps | null>(null);
  
  // point free
  const login = (aa: AuthForm) =>
  // @ts-ignore
    auth.login(aa).then((user: UsersProps) => {
      setUser(user)});
  const register = (aa: AuthForm) =>
  // @ts-ignore
    auth.register(aa).then(setUser(user));
  const logout = () =>
    auth.logout().then((user) => setUser(null));

  useMount(() => {
    bootstrapUser().then(setUser)
  })

  return (
      // @ts-ignore
    <AuthContext.Provider value={{user, login, register, logout}}>{children}</AuthContext.Provider>
  );
};


export const useAuth = () => {
    const context = useContext(AuthContext)
    if(!context) throw new Error('auth context不存在');
    return context;
}