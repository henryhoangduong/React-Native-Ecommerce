import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native";
import { Avatar } from "react-native-paper";
import { useAuth } from "../../context/AuthContext";
import { TouchableOpacity } from "react-native";
import { User } from "../../context/AuthContext";
const EditProfileScreen = () => {
  const { user, handleUpdateUser } = useAuth();
  const [localUser, setLocalUser] = useState<User>(user);
  const handleChange = (name: string, value: string) => {
    setLocalUser((localUser) => ({
      ...localUser,
      [name]: value,
    }));
  };
  return (
    <View style={styles.root}>
      <Avatar.Image size={90} source={require("../../assets/avatar.jpg")} />
      <View style={[styles.textInputContainer]}>
        <TextInput
          maxLength={40}
          style={[styles.input]}
          value={localUser.firstName}
          onChangeText={(value) => {
            handleChange("firstName", value);
          }}
        />
      </View>
      <View style={[styles.textInputContainer]}>
        <TextInput
          maxLength={40}
          style={[styles.input]}
          value={localUser.lastName}
          onChangeText={(value) => {
            handleChange("lastName", value);
          }}
        />
      </View>
      <View style={[styles.textInputContainer]}>
        <TextInput
          maxLength={40}
          style={[styles.input]}
          value={localUser.username}
          onChangeText={(value) => {
            handleChange("username", value);
          }}
        />
      </View>
      <View style={[styles.textInputContainer]}>
        <TextInput
          maxLength={40}
          style={[styles.input]}
          value={localUser.email}
          onChangeText={(value) => {
            handleChange("email", value);
          }}
        />
      </View>
      <View style={[styles.textInputContainer]}>
        <TextInput
          maxLength={40}
          style={[styles.input]}
          value={localUser.phone}
          onChangeText={(value) => {
            handleChange("phone", value);
          }}
        />
      </View>
      <View style={[styles.textInputContainer]}>
        <TextInput
          maxLength={40}
          style={[styles.input]}
          value={localUser.houseNumber.toString()}
          onChangeText={(value) => {
            handleChange("houseNumber", value);
          }}
        />
      </View>
      <View style={[styles.textInputContainer]}>
        <TextInput
          maxLength={40}
          style={[styles.input]}
          value={localUser.street}
          onChangeText={(value) => {
            handleChange("street", value);
          }}
        />
      </View>
      <View style={[styles.textInputContainer]}>
        <TextInput
          maxLength={40}
          style={[styles.input]}
          value={localUser.city}
          onChangeText={(value) => {
            handleChange("city", value);
          }}
        />
      </View>
      <TouchableOpacity
        onPress={() => {
          handleUpdateUser(localUser);
        }}
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
