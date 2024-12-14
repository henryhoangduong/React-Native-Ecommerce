// MSSV: 21522087
// Ho va ten: Duong Huy Hoang
import { Alert, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Link } from "@react-navigation/native";
import { Image } from "react-native";
import { TextInput } from "react-native";
import { TouchableWithoutFeedback, Keyboard } from "react-native";
import { TouchableOpacity } from "react-native";
import { NavigationProp } from "@react-navigation/native";
import { useAuth } from "../context/AuthContext";
import { useNavigation } from "@react-navigation/native";
type LoginProps = {
  navigation: NavigationProp<any>;
};

const Login = ({ navigation }: LoginProps) => {
  const { login, isAuth } = useAuth();
  const nav = useNavigation();

  useEffect(() => {
    console.log(isAuth);
    if (isAuth) nav.navigate("Home" as never);
  }, [isAuth]);

  const handleLogin = () => {
    if (user.email === "12345678@gm.uit.edu.vn" && user.password === "1234") {
      navigation.navigate("Home");
    } else {
      Alert.alert("Incorrect email or password");
    }
  };
  const [user, setUser] = useState({ email: "", password: "" });
  const handleChange = (key: string, value: string) => {
    setUser({ ...user, [key]: value });
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={[styles.root]}>
        <View style={[styles.logotitleContainer]}>
          <Image
            style={[styles.reactImage]}
            source={require("../assets/reactjs.png")}
          />
          <Text style={[styles.title]}>Welcome</Text>
        </View>
        <View style={[styles.inputContainer]}>
          <View style={[styles.textInputContainer]}>
            <TextInput
              onChangeText={(value) => {
                handleChange("email", value);
              }}
              maxLength={40}
              style={[styles.input]}
            />
          </View>
          <View style={[styles.textInputContainer]}>
            <TextInput
              onChangeText={(value) => {
                handleChange("password", value);
              }}
              maxLength={40}
              secureTextEntry={true}
              style={[styles.input]}
            />
          </View>
        </View>
        <View style={[styles.fpContainer]}>
          <Text style={[styles.fpText]}>Forgot password?</Text>
        </View>
        <TouchableOpacity onPress={handleLogin} style={[styles.loginbtn]}>
          <Text style={[styles.loginText]}>LOG IN</Text>
        </TouchableOpacity>
        <Text style={[styles.orText]}>Or login with</Text>
        <View style={[styles.socialContainer]}>
          <Image
            style={[styles.goolgeImage]}
            source={require("../assets/facebook.png")}
          />
          <Image
            style={[styles.goolgeImage]}
            source={require("../assets/Google.jpg")}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Login;

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
    gap: 10,
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
    marginTop: 10,
  },
  signUp: {
    fontWeight: "bold",
    color: "#115de0",
  },
});
