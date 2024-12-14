import { createContext, useEffect, useState } from "react";
import { useContext } from "react";

type AUTHTYPE = {
  isAuth: boolean;
  login: () => void;
  logout: () => void;
};

const AuthContext = createContext<AUTHTYPE>({} as AUTHTYPE);

export const AuthContextProvider = () => {
  const [isAuth, setIsAuth] = useState<boolean>(false);

  useEffect(() => {
    console.log("");
  });
  const login = () => {};

  const logout = () => {};
  return (
    <AuthContext.Provider
      value={{ isAuth, login, logout }}
    ></AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw Error("Auth Context must be initialized");
  }
  return context;
};
