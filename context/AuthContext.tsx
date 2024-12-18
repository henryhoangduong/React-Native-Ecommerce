import React, { createContext, useEffect, useState } from "react";
import { ActivityIndicator } from "react-native";
import { useContext } from "react";
import { apiClient } from "../api/api";
import AsyncStorage from "@react-native-async-storage/async-storage";

type User = {
  name: string;
  email: string;
  username: string;
  phone: string;
  address: string;
};
type AUTHTYPE = {
  isAuth: boolean;
  login: (email: string, password: string) => void;
  logout: () => void;
  user: User;
  updateUser: (name: string, value: string) => void;
};

const AuthContext = createContext<AUTHTYPE>({} as AUTHTYPE);

export const AuthContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isAuth, setIsAuth] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [user, setUser] = useState({
    name: "Dương Huy Hoàng",
    email: "henryhoangduong@gmail.com",
    username: "Dương Huy Hoàng",
    phone: "093452673",
    address: "Go Vap, Ho Chi Minh",
  });
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

  const login = async (email: string, password: string) => {
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
  const updateUser = (name: string, value: string) => {
    setUser((prev) => ({
      ...prev,
      [name]: value, // Use computed property to update the specific field dynamically
    }));
  };
  return (
    <AuthContext.Provider value={{ isAuth, login, logout, user, updateUser }}>
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
