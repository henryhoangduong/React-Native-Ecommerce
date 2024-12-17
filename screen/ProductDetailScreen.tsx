import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  ScrollView,
} from "react-native";
import React from "react";
import { useShopping } from "../context/ShoppingContext";
import { Ionicons } from "@expo/vector-icons";
import { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { RouteProp, useRoute } from "@react-navigation/native";
import { Item } from "../types/types";
type ProductDetailScreenRouteProp = RouteProp<
  { ProductDetail: { item: Item } },
  "ProductDetail"
>;

const ProductDetailScreen = () => {
  // Get the item from route.params
  const route = useRoute<ProductDetailScreenRouteProp>();
  const { item } = route.params;

  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const totalStars = 5;

    let stars = [];
    for (let i = 0; i < fullStars; i++) {
      stars.push(<Ionicons key={i} name="star" size={16} color="gold" />);
    }
    if (hasHalfStar) {
      stars.push(
        <Ionicons key="half" name="star-half" size={16} color="gold" />,
      );
    }
    while (stars.length < totalStars) {
      stars.push(
        <Ionicons
          key={stars.length}
          name="star-outline"
          size={16}
          color="gold"
        />,
      );
    }
    return stars;
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.productImageContainer}>
        <Image source={{ uri: item.image }} style={styles.productImage} />
      </View>

      <View style={styles.productDetails}>
        <Text style={styles.productTitle}>{item.title}</Text>
        <Text style={styles.productPrice}>${item.price}</Text>

        <View style={styles.ratingContainer}>
          <View style={styles.starsContainer}>
            {renderStars(item.rating.rate)}
          </View>
          <Text style={styles.ratingText}>
            {item.rating.rate} ({item.rating.count} reviews)
          </Text>
        </View>

        <Text style={styles.productDescription}>{item.description}</Text>
      </View>
    </ScrollView>
  );
};

export default ProductDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
  },
  productImageContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  productImage: {
    width: "100%",
    height: 300,
    resizeMode: "contain",
  },
  productDetails: {
    marginBottom: 20,
  },
  productTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },
  productPrice: {
    fontSize: 20,
    color: "green",
    marginBottom: 8,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  starsContainer: {
    flexDirection: "row",
    marginRight: 8,
  },
  ratingText: {
    fontSize: 14,
    color: "#555",
  },
  productDescription: {
    fontSize: 16,
    color: "#555",
    lineHeight: 22,
    marginBottom: 20,
  },
  actionsContainer: {
    marginTop: 20,
    alignItems: "center",
  },
});
