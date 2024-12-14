import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./screen/HomeScreen";
import Login from "./screen/Login";

const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <BottomTab.Navigator screenOptions={{ headerShown: false }}>
      <BottomTab.Screen name="Home" component={HomeScreen} />
      <BottomTab.Screen name="Category" component={HomeScreen} />
      <BottomTab.Screen name="Cart" component={HomeScreen} />
      <BottomTab.Screen name="Profile" component={HomeScreen} />
    </BottomTab.Navigator>
  );
};

export const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={BottomNavigator} />
    </Stack.Navigator>
  );
};
