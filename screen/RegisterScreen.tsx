// MSSV: 21522087
// Ho va ten: Duong Huy Hoang
import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "@react-navigation/native";
import "react-native-svg";
import { Image } from "react-native";
import { TextInput } from "react-native";
import { TouchableWithoutFeedback, Keyboard } from "react-native";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
const Register = () => {
  const nav = useNavigation();
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={[styles.root]}>
        <View style={[styles.logotitleContainer]}>
          <Image
            style={[styles.reactImage]}
            source={require("../assets/reactjs.png")}
          />
          <Text style={[styles.title]}>Create New Account</Text>
        </View>
        <View style={[styles.inputContainer]}>
          <View style={[styles.textInputContainer]}>
            <TextInput
              maxLength={40}
              style={[styles.input]}
              placeholder="Enter username"
            />
          </View>
          <View style={[styles.textInputContainer]}>
            <TextInput
              maxLength={40}
              secureTextEntry={true}
              style={[styles.input]}
              placeholder="Enter email"
            />
          </View>
          <View style={[styles.textInputContainer]}>
            <TextInput
              maxLength={40}
              style={[styles.input]}
              placeholder="Enter password"
              secureTextEntry={true}
            />
          </View>
          <View style={[styles.textInputContainer]}>
            <TextInput
              maxLength={40}
              style={[styles.input]}
              placeholder="Confirm password"
              secureTextEntry={true}
            />
          </View>
        </View>
        <TouchableOpacity style={[styles.loginbtn]}>
          <Text style={[styles.loginText]}>CREATE</Text>
        </TouchableOpacity>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 5,
          }}
        >
          <Text style={[styles.dontText]}>Already have an account?</Text>
          <TouchableOpacity
            onPress={() => {
              nav.navigate("Login" as never);
            }}
          >
            <Text style={[styles.signUp]}> Log in now!</Text>
          </TouchableOpacity>{" "}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Register;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "center",
    gap: 10,
    paddingTop: 200,
  },
  logotitleContainer: {
    alignItems: "center",
  },
  reactImage: {
    width: 90,
    height: 90,
    borderRadius: 45,
  },
  textInputContainer: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
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
  loginbtn: {
    borderRadius: 10,
    backgroundColor: "orange",
    width: "80%",
    alignItems: "center",
    paddingVertical: 10,
    marginTop: 20,
  },
  loginText: {
    color: "white",
    fontWeight: "bold",
  },
  fpContainer: {
    width: "80%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  fpText: {
    color: "#ce41b9",
    width: 140,
  },
  socialContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
    marginTop: 10,
  },
  goolgeImage: {
    width: 60,
    height: 60,
    borderRadius: 45,
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
  },
  orText: {
    fontWeight: "bold",
    marginTop: 10,
  },
  dontText: {
    fontSize: 14,
  },
  signUp: {
    fontWeight: "bold",
    color: "#115de0",
  },
});
