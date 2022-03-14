import React from "react";
import { StyleSheet, View, ActivityIndicator } from "react-native";
import LottieView from "lottie-react-native";
function ThemeLoader(props) {
  if (props.size === "small") {
    return <ActivityIndicator {...props} />;
  }
  return (
    <View style={styles.centered}>
      <LottieView
        style={styles.lottie}
        autoPlay
        loop
        source={require("../../assets/loader2.json")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  lottie: {
    width: 200,
    height: 200,
  },
});

export default ThemeLoader;
