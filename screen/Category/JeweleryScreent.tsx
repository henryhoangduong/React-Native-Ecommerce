import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useShopping } from "../../context/ShoppingContext";
import { Item } from "../../types/types";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";
import { useCart } from "../../context/CartContext";

const JeweleryScreen = () => {
  const nav = useNavigation();
  const { getItemByCategory } = useShopping();
  const items = getItemByCategory("jewelery");
  const { addToCart } = useCart();
  const renderItem = ({ item }: { item: Item }) => {
    return (
      <TouchableOpacity
        onPress={() => {
          // @ts-ignore
          nav.navigate("Product detail", { item });
        }}
        style={styles.itemContainer}
      >
        <Image source={{ uri: item.image }} style={styles.itemImage} />
        <View style={{ width: "100%" }}>
          <Text style={styles.itemTitle} numberOfLines={1}>
            {item.title}
          </Text>
        </View>

        <View style={{ width: "100%" }}>
          <Text style={styles.itemPrice}>${item.price}</Text>
        </View>
        <View style={styles.ratingContainer}>
          <View style={{ width: "80%" }}>
            <Text style={styles.ratingText}>
              Rating: {item.rating.rate} ({item.rating.count} reviews)
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              addToCart(item);
            }}
          >
            <AntDesign name="pluscircle" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.root}>
      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

export default JeweleryScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "white",
    padding: 10,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  listContainer: {
    paddingBottom: 10,
  },
  itemContainer: {
    flex: 1,
    margin: 10,
    backgroundColor: "#f5f5f5",
    borderRadius: 8,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  itemImage: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
    textAlign: "left",
  },
  itemPrice: {
    fontSize: 14,
    color: "#888",
    marginTop: 5,
    textAlign: "left",
  },
  ratingContainer: {
    width: "100%",
    marginTop: 5,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  ratingText: {
    fontSize: 14,
    color: "#666",
  },
});
