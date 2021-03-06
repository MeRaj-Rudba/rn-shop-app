import { createStackNavigator } from "@react-navigation/stack";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import { useSelector, useDispatch } from "react-redux";

import { Platform, Button } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Colors from "../constants/Colors";
import ProductsOverviewScreen from "../screens/shop/ProductsOverviewScreen";
import { NavigationContainer } from "@react-navigation/native";
import ProductDetailsScreen from "../screens/shop/ProductDetailsScreen";
import CartScreen from "../screens/shop/CartScreen";
import OrdersScreen from "../screens/shop/OrdersScreen";
import UserProductScreen from "../screens/user/UserProductScreen";
import EditProductScreen from "../screens/user/EditProductScreen";
import { useState } from "react";
import AuthScreen from "../screens/user/AuthScreen";
import StartUpScreen from "../screens/StartUpScreen";
import * as authActions from "../store/actions/auth";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const defaultNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Colors.primary : "",
  },
  headerTintColor: Platform.OS === "android" ? "white" : Colors.primary,
  headerTitleStyle: {
    fontFamily: "pt-sans-bold",
  },
  headerBackTitleStyle: { fontFamily: "pt-sans" },
};

const ProductsNavigator = () => {
  return (
    <Stack.Navigator screenOptions={defaultNavOptions}>
      <Stack.Screen
        name="ProductsOverview"
        component={ProductsOverviewScreen}
        options={{ title: "All Products" }}
      />
      <Stack.Screen
        name="ProductsDetails"
        component={ProductDetailsScreen}
        options={{ title: "Details" }}
      />
      <Stack.Screen
        name="Cart"
        component={CartScreen}
        options={{ title: "Your Cart" }}
      />
    </Stack.Navigator>
  );
};

const OrdersNavigator = () => {
  return (
    <Stack.Navigator screenOptions={defaultNavOptions}>
      <Stack.Screen
        name="Orders"
        component={OrdersScreen}
        options={{ title: "All Orders" }}
      />
    </Stack.Navigator>
  );
};

const AdminNavigator = () => {
  return (
    <Stack.Navigator screenOptions={defaultNavOptions}>
      <Stack.Screen
        name="UserProducts"
        component={UserProductScreen}
        options={{ title: "User Products" }}
      />
      <Stack.Screen
        name="EditProduct"
        component={EditProductScreen}
        options={{ title: "Edit Products" }}
      />
    </Stack.Navigator>
  );
};

function CustomDrawerContent(props) {
  const dispatch = useDispatch();
  return (
    <DrawerContentScrollView {...props} style={{ paddingTop: 20 }}>
      <DrawerItemList {...props} />
      <Button
        color={Colors.primary}
        title="Sign Out"
        onPress={() => {
          dispatch(authActions.signOut());
        }}
      />
    </DrawerContentScrollView>
  );
}

export default function ShopNavigator() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        drawerActiveTintColor: Colors.primary,
        drawerLabelStyle: {
          fontFamily: "pt-sans-bold",
        },
      }}
    >
      <Drawer.Screen
        name="ProductsDrawer"
        component={ProductsNavigator}
        options={{
          headerShown: false,
          drawerLabel: "Products",
          drawerIcon: ({ focused, color, size }) => (
            <MaterialCommunityIcons
              name="cart-outline"
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="OrdersDrawer"
        component={OrdersNavigator}
        options={{
          headerShown: false,
          drawerLabel: "Orders",
          drawerIcon: ({ focused, color, size }) => (
            <MaterialCommunityIcons
              name="format-list-bulleted-square"
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="AdminDrawer"
        component={AdminNavigator}
        options={{
          headerShown: false,
          drawerLabel: "Admin",
          drawerIcon: ({ focused, color, size }) => (
            <MaterialCommunityIcons
              name="account-outline"
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
