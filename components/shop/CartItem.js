import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Colors from "../../constants/Colors";

function CartItem(props) {
  let Touchable = TouchableOpacity;

  if (Platform.OS === "android" && Platform.Version >= 21) {
    Touchable = TouchableNativeFeedback;
  }

  return (
    <View style={styles.cartItem}>
      <View style={styles.itemData}>
        <Text style={styles.quantity}>{props.quantity}</Text>
        <Text style={styles.mainText}>
          <Text style={styles.theX}> x </Text>
          {props.title}
        </Text>
      </View>
      <View style={styles.itemData}>
        <Text style={styles.mainText}>$ {props.amount.toFixed(2)}</Text>

        {props.deletable && (
          <Touchable onPress={props.onRemove} style={styles.deleteButton}>
            <MaterialCommunityIcons
              name="trash-can-outline"
              size={23}
              color="tomato"
            />
          </Touchable>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cartItem: {
    padding: 10,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
  },
  itemData: {
    flexDirection: "row",
    alignItems: "center",
  },
  quantity: {
    fontFamily: "pt-sans",
    fontSize: 16,
    color: "#888",
  },
  mainText: {
    fontFamily: "pt-sans-bold",
    fontSize: 16,
  },

  deleteButton: {
    marginLeft: 20,
  },
  theX: {
    color: Colors.primary,
  },
});

export default CartItem;
