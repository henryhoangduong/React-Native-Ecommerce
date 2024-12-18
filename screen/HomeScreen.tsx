import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import { useShopping } from "../context/ShoppingContext";
import { Item } from "../types/types";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";
import { useCart } from "../context/CartContext";

const HomeScreen = () => {
  const nav = useNavigation();
  const { items } = useShopping();
  const { addToCart } = useCart();

  const bannerArray = [
    "https://www.shutterstock.com/image-vector/ecommerce-web-banner-3d-smartphone-260nw-2069305328.jpg",
    "https://img.pikbest.com/origin/10/01/82/867pIkbEsTAIq.png!w700wp",
    "https://static.vecteezy.com/system/resources/thumbnails/004/707/493/small_2x/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-vector.jpg",
  ];

  const [bannerIndex, setBannerIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBannerIndex((prevIndex) => (prevIndex + 1) % bannerArray.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

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
        ListHeaderComponent={
          <>
            <Image
              source={{
                uri: bannerArray[bannerIndex],
              }}
              style={styles.banner}
            />

            <Text style={styles.sectionTitle}>New Hot Deals</Text>
          </>
        }
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "white",
    padding: 10,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 15,
    color: "#333",
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
  banner: {
    width: "100%",
    height: 200, // Adjust the height of the banner as needed
    resizeMode: "cover",
  },
});
