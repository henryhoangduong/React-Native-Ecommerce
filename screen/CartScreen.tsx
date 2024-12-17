import {
  StyleSheet,
  Button,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useCart } from "../context/CartContext";
import { Ionicons } from "@expo/vector-icons";
import { CartItem } from "../types/types";
const CartScreen = () => {
  const nav = useNavigation();
  const { cartItems, getTotalPrice, removeFromCart, updateQuantity } =
    useCart();

  // Render each cart item
  const renderCartItem = ({ item }: { item: CartItem }) => {
    return (
      <View style={styles.cartItem}>
        <Image source={{ uri: item.item.image }} style={styles.cartItemImage} />
        <View style={styles.cartItemInfo}>
          <Text style={styles.cartItemTitle}>{item.item.title}</Text>
          <Text style={styles.cartItemPrice}>${item.item.price}</Text>
        </View>
        <View style={styles.cartItemActions}>
          <Text>Quantity: {item.quantity}</Text>
          <View style={styles.quantityControls}>
            <TouchableOpacity
              onPress={() => updateQuantity(item.item.id, item.quantity - 1)}
              style={styles.quantityButton}
            >
              <Ionicons name="remove-circle-outline" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => updateQuantity(item.item.id, item.quantity + 1)}
              style={styles.quantityButton}
            >
              <Ionicons name="add-circle-outline" size={24} color="black" />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={() => removeFromCart(item.item.id)}
            style={styles.removeButton}
          >
            <Text style={styles.removeButtonText}>Remove</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.root}>
      {cartItems.length === 0 ? (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text>You have no products in your cart.</Text>
          <Button
            title="Shop now"
            onPress={() => {
              nav.navigate("Home" as never);
            }}
          />
        </View>
      ) : (
        <>
          <FlatList
            data={cartItems}
            renderItem={renderCartItem}
            keyExtractor={(item) => item.item.id.toString()}
            contentContainerStyle={styles.cartList}
          />
          <View
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View style={styles.totalPriceContainer}>
              <Text style={styles.totalPriceText}>
                Total: ${getTotalPrice().toFixed(2)}
              </Text>
            </View>
            <Button
              title="Checkout"
              onPress={() => {
                nav.navigate("Checkout" as never);
              }}
            />
          </View>
        </>
      )}
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "white",
    padding: 20,
  },
  cartList: {
    marginVertical: 20,
  },
  cartItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    borderBottomWidth: 1,
    borderColor: "#ccc",
  },
  cartItemImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 10,
  },
  cartItemInfo: {
    flex: 2,
    justifyContent: "space-between",
  },
  cartItemTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  cartItemPrice: {
    fontSize: 14,
    color: "gray",
  },
  cartItemActions: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-end",
  },
  quantityControls: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
  },
  quantityButton: {
    marginHorizontal: 5,
  },
  removeButton: {
    marginTop: 10,
  },
  removeButtonText: {
    color: "red",
    fontSize: 14,
  },
  totalPriceContainer: {
    alignItems: "flex-end",
  },
  totalPriceText: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
