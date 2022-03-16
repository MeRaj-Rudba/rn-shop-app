import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";

import ShopNavigator from "./ShopNavigator";
import AuthNavigator from "./AuthNavigator";

export default function NavContainer() {
  const user = useSelector((state) => state.auth.token);

  return (
    <NavigationContainer>
      {user ? <ShopNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
}
