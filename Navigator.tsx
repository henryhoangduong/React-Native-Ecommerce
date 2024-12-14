import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./screen/HomeScreen";
import Login from "./screen/Login";
import { Ionicons } from "@expo/vector-icons"; // Import Expo icons
import ProfileScreen from "./screen/ProfileScreen";
import CartScreen from "./screen/CartScreen";
import CategoryScreen from "./screen/CategoryScreen";
import { useAuth } from "./context/AuthContext";

const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <BottomTab.Navigator screenOptions={{ headerShown: false }}>
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
        component={CategoryScreen}
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
            <Ionicons name="cart-outline" size={size} color={color} />
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
      {/* isAuth: false */}
      <Stack.Screen name="Login" component={Login} />
      {/* isAuth: true */}
      <Stack.Screen name="Home" component={BottomNavigator} />
    </Stack.Navigator>
  );
};
