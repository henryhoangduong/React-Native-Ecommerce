import { View, Text, Switch } from "react-native";
import { StyleSheet } from "react-native";
import { Avatar } from "react-native-paper";
import { Divider } from "react-native-paper";
import LogOutIcon from "../assets/icons/LogoutIcon";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useAuth } from "../context/AuthContext";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
const ProfileScreen = () => {
  const { logout } = useAuth();
  const { user } = useAuth();
  const nav = useNavigation();
  const handleLogout = () => {
    logout();
    nav.navigate("Login" as never);
  };
  return (
    <View style={styles.root}>
      <View style={styles.firstBox}>
        <View style={styles.avatar}>
          <Avatar.Image size={90} source={require("../assets/avatar.jpg")} />
          <TouchableOpacity
            onPress={() => {
              nav.navigate("Edit Profile" as never);
            }}
            style={{
              position: "absolute",
              backgroundColor: "black",
              right: 5,
              bottom: 0,
              padding: 7,
              borderRadius: 100,
            }}
          >
            <AntDesign name="edit" size={15} color="white" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.thirdBox}>
        <Text style={{ fontWeight: "500", color: "gray", left: 10 }}>
          Information
        </Text>
        <View style={styles.subThirdBox}>
          <View style={styles.subThirdBoxRow}>
            <View style={styles.subThirdBoxRowContainer1}>
              <Text style={{ left: 10, fontWeight: "500", fontSize: 16 }}>
                {user.name}
              </Text>
            </View>
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
              <View style={styles.subThirdBoxRowContainer1}>
                <Text style={{ left: 10, fontWeight: "500", fontSize: 16 }}>
                  {user.email}
                </Text>
              </View>
            </View>
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
              <Text style={{ left: 10, fontWeight: "500", fontSize: 16 }}>
                {user.username}
              </Text>
            </View>
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
              <Text style={{ left: 10, fontWeight: "500", fontSize: 16 }}>
                {user.phone}
              </Text>
            </View>
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
              <Text style={{ left: 10, fontWeight: "500", fontSize: 16 }}>
                {user.address}
              </Text>
            </View>
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
    alignItems: "center",
    height: "100%",
    padding: 20,
    backgroundColor: "white",
    gap: 60,
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
    padding: 15,
    backgroundColor: "black",
    borderRadius: 25,
    width: 100,
  },
  email: {
    display: "flex",
    alignItems: "center",
    padding: 5,
  },
  firstBox: {
    top: 20,
    alignItems: "center",
    gap: 5,
    display: "flex",
    flexDirection: "row",
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

  thirdBox: {
    width: "100%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 8,
    gap: 10,
  },
  subThirdBox: {
    borderRadius: 26,
    overflow: "hidden",
    backgroundColor: "white",
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
