import React, { useState } from "react";
import { StyleSheet, View, Text, Platform, Button } from "react-native";
import Colors from "../../constants/Colors";
import CartItem from "./CartItem";

function OrderItem(props) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <View style={styles.itemContainer}>
      <View style={styles.summary}>
        <Text style={styles.totalAmount}>$ {props.amount.toFixed(2)}</Text>
        <Text style={styles.date}>{props.date}</Text>
      </View>
      <Button
        color={Colors.primary}
        title={!showDetails ? "Show Details" : "Hide Details"}
        onPress={() => setShowDetails((prevState) => !prevState)}
      />
      {showDetails && (
        <View style={styles.detailsItems}>
          {props.items.map((cartItem) => (
            <CartItem
              key={cartItem.productId}
              quantity={cartItem.quantity}
              amount={cartItem.sum}
              title={cartItem.productTitle}
            />
          ))}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: "white",
    margin: 20,
    padding: 10,
    alignItems: "center",
  },
  summary: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginBottom: 15,
  },

  totalAmount: {
    fontFamily: "pt-sans-bold",
    fontSize: 16,
  },
  date: {
    fontFamily: "pt-sans",
    fontSize: 16,
    color: "#888",
  },
  detailsItems: {
    width: "100%",
    marginVertical: 10,
    borderColor: "#888",
    borderWidth: 0.5,
    borderRadius: 10,
  },
});

export default OrderItem;
