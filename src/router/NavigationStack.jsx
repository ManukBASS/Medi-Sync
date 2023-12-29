import { createStackNavigator } from "@react-navigation/stack";
import { LoginScreen } from "../components/screens/LoginScreen";

const Stack = createStackNavigator();

export function NavigationStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  );
}
