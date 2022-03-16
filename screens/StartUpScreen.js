import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch } from "react-redux";

import ThemeLoader from "../components/UI/ThemeLoader";
import * as authActions from "../store/actions/auth";

function StartUpScreen(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    const trySignIn = async () => {
      const userData = await AsyncStorage.getItem("userData");
      if (!userData) {
        props.navigation.navigate("Auth");
        return;
      }
      const transformedData = JSON.parse(userData);
      const { token, userId, expiryDate } = transformedData;
      const expirationDate = new Date(expiryDate);
      if (expirationDate <= new Date() || !token || !userId) {
        props.navigation.navigate("Auth");
        return;
      }
      //navigate to the shop
      dispatch(authActions.authenticate(userId, token));
    };
    trySignIn();
  }, [dispatch]);

  return (
    <View style={styles.screen}>
      <ThemeLoader />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default StartUpScreen;
