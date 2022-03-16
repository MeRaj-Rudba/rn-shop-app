import React from "react";
import { StyleSheet, View, Platform } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Colors from "../constants/Colors";
import StartUpScreen from "../screens/StartUpScreen";
import AuthScreen from "../screens/user/AuthScreen";

function AuthNavigator(props) {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Platform.OS === "android" ? Colors.primary : "",
        },
        headerTintColor: Platform.OS === "android" ? "white" : Colors.primary,
        headerTitleStyle: {
          fontFamily: "pt-sans-bold",
        },
        headerBackTitleStyle: { fontFamily: "pt-sans" },
      }}
    >
      <Stack.Screen
        name="StartUp"
        component={StartUpScreen}
        options={{ title: "Welcome" }}
      />
      <Stack.Screen
        name="Auth"
        component={AuthScreen}
        options={{ title: "Authentication" }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default AuthNavigator;
