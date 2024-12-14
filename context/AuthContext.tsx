import React, { createContext, useEffect, useState } from "react";
import * as Keychain from "react-native-keychain";
import { ActivityIndicator } from "react-native";
import { useContext } from "react";
import { apiClient } from "../api/api";
import AsyncStorage from "@react-native-async-storage/async-storage";

type AUTHTYPE = {
  isAuth: boolean;
  login: () => void;
  logout: () => void;
};

const AuthContext = createContext<AUTHTYPE>({} as AUTHTYPE);

export const AuthContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isAuth, setIsAuth] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        const token = await AsyncStorage.getItem("userToken");
        if (token) {
          setIsAuth(true);
        } else {
          setIsAuth(false);
        }
      } catch (error) {
        console.log("error: ", error);
      }
    };
    checkAuthStatus();
    setLoading(false);
  }, []);

  const login = async () => {
    try {
      const response = await apiClient.post("/auth/login", {
        username: "mor_2314",
        password: "83r5^_",
      });
      const token = response.data.token;
      if (token) {
        setIsAuth(true);
        await AsyncStorage.setItem("userToken", token);
      }
    } catch (error) {}
  };
  const logout = () => {
    AsyncStorage.removeItem("userToken");
    setIsAuth(false);
  };
  return (
    <AuthContext.Provider value={{ isAuth, login, logout }}>
      {loading ? <ActivityIndicator style={{ top: "50%" }} /> : children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw Error("Auth Context must be initialized");
  }
  return context;
};
