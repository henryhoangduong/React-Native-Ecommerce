import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { StackNavigator } from "./Navigator";
import { AuthContextProvider } from "./context/AuthContext";
import { ShoppingContextProvider } from "./context/ShoppingContext";
import { CartProvider } from "./context/CartContext";
export default function App() {
  return (
    <AuthContextProvider>
      <NavigationContainer>
        <ShoppingContextProvider>
          <CartProvider>
            <StackNavigator />
          </CartProvider>
        </ShoppingContextProvider>
      </NavigationContainer>
    </AuthContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
