import { createContext, ReactNode, useEffect, useState } from "react";
import { useContext } from "react";
import { apiClient } from "../api/api";
import { ActivityIndicator } from "react-native";
import { Item } from "../types/types";

type SHOPPINGTYPE = {
  fetchItems: () => void;
  items: Item[] | null;
  getItemByCategory: (category: string) => Item[] | null;
};

const ShoppingContext = createContext<SHOPPINGTYPE>({} as SHOPPINGTYPE);

export const ShoppingContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [isLoading, setLoading] = useState<boolean>(false);
  const [items, setItems] = useState<Item[]>({} as Item[]);
  const fetchItems = async () => {
    setLoading(true);
    try {
      const response = await apiClient.get("/products");
      setItems(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);
  // export type Item = {
  //   category: string;
  //   description: string;
  //   id: number;
  //   image: string;
  //   price: number;
  //   rating: Rating;
  //   title: string;
  // };

  const getItemByCategory = (category: string) => {
    if (!items) return null;
    return items.filter(
      (item) => item.category.toLowerCase() === category.toLowerCase(),
    );
  };
  return (
    <ShoppingContext.Provider value={{ fetchItems, items, getItemByCategory }}>
      {isLoading ? <ActivityIndicator style={{ top: "50%" }} /> : children}
    </ShoppingContext.Provider>
  );
};

export const useShopping = () => {
  const context = useContext(ShoppingContext);
  if (!context) {
    throw Error("Shopping Context must be initialized");
  }
  return context;
};
