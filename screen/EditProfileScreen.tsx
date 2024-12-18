import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TextInput } from "react-native";
import { Avatar } from "react-native-paper";
import { useAuth } from "../context/AuthContext";
import { TouchableOpacity } from "react-native";
const EditProfileScreen = () => {
  const { user } = useAuth();
  return (
    <View style={styles.root}>
      <Avatar.Image size={90} source={require("../assets/avatar.jpg")} />
      <View style={[styles.textInputContainer]}>
        <TextInput maxLength={40} style={[styles.input]} value={user.name} />
      </View>
      <View style={[styles.textInputContainer]}>
        <TextInput
          maxLength={40}
          style={[styles.input]}
          value={user.username}
        />
      </View>
      <View style={[styles.textInputContainer]}>
        <TextInput maxLength={40} style={[styles.input]} value={user.email} />
      </View>
      <View style={[styles.textInputContainer]}>
        <TextInput maxLength={40} style={[styles.input]} value={user.phone} />
      </View>
      <View style={[styles.textInputContainer]}>
        <TextInput maxLength={40} style={[styles.input]} value={user.address} />
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: "black",
          padding: 15,
          borderRadius: 20,
          width: "100%",
          alignItems: "center",
        }}
      >
        <Text style={{ color: "white", fontWeight: "bold" }}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

export default EditProfileScreen;

const styles = StyleSheet.create({
  root: {
    backgroundColor: "white",
    flex: 1,
    alignItems: "center",
    gap: 20,
    paddingHorizontal: 30,
    paddingTop: 30,
  },
  textInputContainer: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    borderColor: "gray",
  },
  inputContainer: {
    width: "80%",
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
    marginTop: 20,
  },
  input: {
    flex: 1,
  },
});
