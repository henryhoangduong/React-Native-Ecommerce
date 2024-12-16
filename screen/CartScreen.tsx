import { StyleSheet, Button, View, Text } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const CartScreen = () => {
  const nav = useNavigation();
  return (
    <View style={[styles.root]}>
      <Text>You have no product in cart</Text>
      <Button
        title="Shopping now"
        onPress={() => {
          nav.navigate("Home" as never);
        }}
      />
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});
