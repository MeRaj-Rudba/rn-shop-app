import { createStackNavigator } from "@react-navigation/stack";
import { Platform } from "react-native";
import Colors from "../constants/Colors";
import ProductsOverviewScreen from "../screens/shop/ProductsOverviewScreen";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

const ProductsNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Platform.OS === "android" ? Colors.primary : "",
        },
        headerTintColor: Platform.OS === "android" ? "white" : Colors.primary,
      }}
    >
      <Stack.Screen
        name="ProductsOverview"
        component={ProductsOverviewScreen}
        options={{ title: "All Products" }}
      />
    </Stack.Navigator>
  );
};

export default function ShopNavigator() {
  return (
    <NavigationContainer>
      <ProductsNavigator />
    </NavigationContainer>
  );
}
