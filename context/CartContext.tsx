import { createContext, ReactNode, useContext, useState } from "react";
import { Item } from "../types/types";
import { CartItem } from "../types/types";
import { Alert } from "react-native";
type CartContextType = {
  cartItems: CartItem[];
  addToCart: (item: Item) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  getTotalPrice: () => number;
};

const CartContext = createContext<CartContextType>({} as CartContextType);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (item: Item) => {
    setCartItems((prevItems) => {
      const itemExists = prevItems.find(
        (cartItem) => cartItem.item.id === item.id,
      );
      if (itemExists) {
        Alert.alert(
          "Item Already in Cart",
          "This item is already in your cart. You can increase its quantity.",
          [{ text: "OK" }],
        );
        return prevItems;
      }
      return [...prevItems, { item, quantity: 1 }];
    });
  };

  const removeFromCart = (id: number) => {
    // Check if this is the last item in the cart
    if (cartItems.length === 1) {
      Alert.alert(
        "Confirm Removal",
        "This is the last item in your cart. Are you sure you want to remove it?",
        [
          {
            text: "No",
            onPress: () => console.log("Item removal canceled"),
            style: "cancel",
          },
          {
            text: "Yes",
            onPress: () => {
              setCartItems((prevItems) =>
                prevItems.filter((cartItem) => cartItem.item.id !== id),
              );
              console.log("Last item removed from cart");
            },
          },
        ],
        { cancelable: true },
      );
    } else {
      setCartItems((prevItems) =>
        prevItems.filter((cartItem) => cartItem.item.id !== id),
      );
    }
  };

  const updateQuantity = (id: number, quantity: number) => {
    // If quantity is zero, show an alert asking if the user wants to remove the item
    if (quantity <= 0) {
      Alert.alert(
        "Remove Item",
        "Are you sure you want to remove this product from your cart?",
        [
          {
            text: "No",
            onPress: () => console.log("Item quantity change canceled"),
            style: "cancel", // This will make "No" button appear with a cancel style
          },
          {
            text: "Yes",
            onPress: () => {
              // Remove item from cart if "Yes"
              setCartItems((prevItems) =>
                prevItems.filter((cartItem) => cartItem.item.id !== id),
              );
              console.log("Item removed from cart");
            },
          },
        ],
        { cancelable: true }, // Allow dismissing the alert by tapping outside
      );
    } else {
      // Update quantity if it's greater than 0
      setCartItems((prevItems) =>
        prevItems.map((cartItem) =>
          cartItem.item.id === id ? { ...cartItem, quantity } : cartItem,
        ),
      );
    }
  };

  const getTotalPrice = () => {
    return cartItems.reduce(
      (total, cartItem) => total + cartItem.item.price * cartItem.quantity,
      0,
    );
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        getTotalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
