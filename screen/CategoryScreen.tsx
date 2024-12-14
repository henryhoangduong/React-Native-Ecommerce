import { StyleSheet, Text, View } from "react-native";
import React from "react";

const CategoryScreen = () => {
  return (
    <View style={[styles.root]}>
      <Text>CategoryScreen</Text>
    </View>
  );
};

export default CategoryScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});
