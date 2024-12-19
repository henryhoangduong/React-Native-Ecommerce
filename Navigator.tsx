import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./screen/HomeScreen";
import Login from "./screen/Login";
import { Ionicons } from "@expo/vector-icons"; // Import Expo icons
import ProfileScreen from "./screen/Profile/ProfileScreen";
import CartScreen from "./screen/CartScreen";
import { useAuth } from "./context/AuthContext";
import { useCart } from "./context/CartContext";
import { StyleSheet, View, Text } from "react-native";
import ProductDetailScreen from "./screen/ProductDetailScreen";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import AllCategoryScreen from "./screen/Category/AllCategoryScreen";
import ElectronicsCategoryScreen from "./screen/Category/ElectronicsCategoryScreen";
import JeweleryScreen from "./screen/Category/JeweleryScreent";
import MenClothingScreen from "./screen/Category/MenClothingScreen";
import Register from "./screen/RegisterScreen";
import EditProfileScreen from "./screen/Profile/EditProfileScreen";

const Top = createMaterialTopTabNavigator();
const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();
const styles = StyleSheet.create({
  iconContainer: {
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
  },
  badge: {
    position: "absolute",
    top: -5,
    right: -5,
    backgroundColor: "red",
    borderRadius: 10,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  badgeText: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
  },
});

const TopNavigator = () => {
  return (
    <Top.Navigator>
      <Top.Screen name="All" component={AllCategoryScreen} />
      <Top.Screen name="Electronics" component={ElectronicsCategoryScreen} />
      <Top.Screen name="Jewelery" component={JeweleryScreen} />
      <Top.Screen name="Men's clothing" component={MenClothingScreen} />
    </Top.Navigator>
  );
};

const BottomNavigator = () => {
  const { cartItems } = useCart();
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Category"
        component={TopNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="list-outline" size={size} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <View style={styles.iconContainer}>
              <Ionicons name="cart-outline" size={size} color={color} />
              {cartItems.length > 0 && (
                <View style={styles.badge}>
                  <Text style={styles.badgeText}>{cartItems.length}</Text>
                </View>
              )}
            </View>
          ),
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-outline" size={size} color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};

export const StackNavigator = () => {
  const { isAuth } = useAuth();
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={isAuth ? "Home" : "Login"}
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Home" component={BottomNavigator} />
      <Stack.Screen
        name="Product detail"
        options={{ headerShown: true }}
        component={ProductDetailScreen}
      />
      <Stack.Screen
        options={{ headerShown: true }}
        name="Edit Profile"
        component={EditProfileScreen}
      />
    </Stack.Navigator>
  );
};
