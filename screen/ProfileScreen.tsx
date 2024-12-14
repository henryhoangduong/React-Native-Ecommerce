import { View, Text, Switch } from "react-native";
import { StyleSheet } from "react-native";
import { Avatar } from "react-native-paper";
import StoreIcon from "../assets/icons/StoreIcon";
import { Button, Divider } from "react-native-paper";
import { useState } from "react";
import ArrowIcon from "../assets/icons/ArrowIcon";
import SupportIcon from "../assets/icons/SupportIcon";
import LogOutIcon from "../assets/icons/LogoutIcon";
import { NotificationIcon } from "../assets/icons/NotificationIcon";
import { FaceIcon } from "../assets/icons/FaceIcon";
import { PinCodeIcon } from "../assets/icons/PinCode";
import { useAuth } from "../context/AuthContext";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
const ProfileScreen = () => {
  const { logout } = useAuth();
  const [isEnabled, setIsEnabled] = useState(true);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const nav = useNavigation();
  const handleLogout = () => {
    logout();
    nav.navigate("Login" as never);
  };
  return (
    <View style={styles.root}>
      <View style={styles.firstBox}>
        <View style={styles.avatar}>
          <Avatar.Image size={72} source={require("../assets/avatar.jpg")} />
        </View>
        <View style={styles.name}>
          <Text style={{ fontWeight: "bold", fontSize: 20 }}>
            Duong Huy Hoang
          </Text>
        </View>
        <View style={styles.email}>
          <Text style={{ fontWeight: "500", color: "gray" }}>
            henryhoangduong@gmail.com
          </Text>
        </View>
        <View style={styles.editButton}>
          <Button
            style={{
              backgroundColor: "black",
            }}
          >
            <Text style={{ color: "white" }}>Edit Profile</Text>
          </Button>
        </View>
      </View>
      <View style={styles.secondBox}>
        <Text style={{ fontWeight: "500", color: "gray", left: 5, bottom: 10 }}>
          Inventories
        </Text>
        <View style={styles.subSecondBox}>
          <View style={styles.subSecondBoxRow}>
            <View style={styles.subSecondBoxRowContainer1}>
              <View style={styles.icon}>
                <StoreIcon color={"#A0A0A0"} />
              </View>
              <Text style={{ left: 10, fontWeight: "500", fontSize: 16 }}>
                My Store
              </Text>
            </View>
            <ArrowIcon color={"#A0A0A0"} />
          </View>
          <Divider
            style={{
              backgroundColor: "gray",
              height: 0.6,
              width: "90%",
              alignSelf: "center",
            }}
          />
          <View style={styles.subSecondBoxRow}>
            <View style={styles.subSecondBoxRowContainer1}>
              <View style={styles.icon}>
                <SupportIcon color={"#A0A0A0"} />
              </View>
              <Text style={{ left: 10, fontWeight: "500", fontSize: 16 }}>
                Support
              </Text>
            </View>
            <ArrowIcon color={"#A0A0A0"} />
          </View>
        </View>
      </View>
      <View style={styles.thirdBox}>
        <Text
          style={{ fontWeight: "500", color: "gray", left: 10, bottom: 10 }}
        >
          Preferences
        </Text>
        <View style={styles.subThirdBox}>
          <View style={styles.subThirdBoxRow}>
            <View style={styles.subThirdBoxRowContainer1}>
              <View style={styles.icon}>
                <NotificationIcon color={"#A0A0A0"} />
              </View>
              <Text style={{ left: 10, fontWeight: "500", fontSize: 16 }}>
                Push notification
              </Text>
            </View>
            <Switch
              trackColor={{ false: "#767577", true: "#FF8058" }}
              thumbColor={"white"}
              //@ts-expect-error activeThumbColor not recognized by TypeScript
              activeThumbColor="white"
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
          <Divider
            style={{
              backgroundColor: "gray",
              height: 0.5,
              width: "90%",
              alignSelf: "center",
            }}
          />
          <View style={styles.subThirdBoxRow}>
            <View style={styles.subThirdBoxRowContainer1}>
              <View style={styles.icon}>
                <FaceIcon color={"#A0A0A0"} />
              </View>
              <Text style={{ left: 10, fontWeight: "500", fontSize: 16 }}>
                Face Id
              </Text>
            </View>
            <Switch
              trackColor={{ false: "#767577", true: "#FF8058" }}
              thumbColor={"white"}
              //@ts-expect-error activeThumbColor not recognized by TypeScript
              activeThumbColor="white"
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
          <Divider
            style={{
              backgroundColor: "gray",
              height: 0.6,
              width: "90%",
              alignSelf: "center",
            }}
          />
          <View style={styles.subThirdBoxRow}>
            <View style={styles.subThirdBoxRowContainer1}>
              <View style={styles.icon}>
                <PinCodeIcon color={"#A0A0A0"} />
              </View>
              <Text style={{ left: 10, fontWeight: "500", fontSize: 16 }}>
                Pin code
              </Text>
            </View>
            <ArrowIcon color={"#A0A0A0"} />
          </View>
          <Divider
            style={{
              backgroundColor: "gray",
              height: 0.6,
              width: "90%",
              alignSelf: "center",
            }}
          />
          <View style={styles.subThirdBoxRow}>
            <TouchableOpacity
              onPress={() => {
                handleLogout();
              }}
              style={styles.subThirdBoxRowContainer1}
            >
              <View style={styles.logout}>
                <LogOutIcon color={"#AA1D1D"} />
              </View>
              <Text
                style={{
                  left: 10,
                  fontWeight: "500",
                  fontSize: 16,
                  color: "#AA1D1D",
                }}
              >
                Logout
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    paddingTop: 30,
    flex: 1,
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
    padding: 20,
    backgroundColor: "white",
  },
  avatar: {
    display: "flex",
    alignItems: "center",
    padding: 5,
  },
  icon: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 5,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    alignSelf: "center",
    padding: 5,
    borderRadius: 10,
  },
  logout: {
    backgroundColor: "#FEECEC",
    alignSelf: "center",
    padding: 5,
    borderRadius: 10,
  },
  name: {
    display: "flex",
    alignItems: "center",
    padding: 5,
  },
  editButton: {
    display: "flex",
    alignItems: "center",
    padding: 5,
  },
  email: {
    display: "flex",
    alignItems: "center",
    padding: 5,
  },
  firstBox: {
    top: 20,
  },
  secondBox: {
    width: "100%",
  },
  subSecondBox: {
    borderRadius: 26,
    overflow: "hidden",
    backgroundColor: "#e8e8e8",
  },
  subSecondBoxRow: {
    fontSize: 24,
    padding: 12,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  subSecondBoxRowContainer1: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  thirdBox: {
    width: "100%",
    bottom: 30,
  },
  subThirdBox: {
    borderRadius: 26,
    overflow: "hidden",
    backgroundColor: "#e8e8e8",
  },
  subThirdBoxRow: {
    fontSize: 24,
    padding: 12,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  subThirdBoxRowContainer1: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

export default ProfileScreen;
