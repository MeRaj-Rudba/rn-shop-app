import React from "react";
import {
  StyleSheet,
  Button,
  View,
  Text,
  Image,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
} from "react-native";
import Colors from "../../constants/Colors";

function ProductItem(props) {
  let Touchable = TouchableOpacity;

  if (Platform.OS === "android" && Platform.Version >= 21) {
    Touchable = TouchableNativeFeedback;
  }

  return (
    <View style={styles.product}>
      <Touchable onPress={props.onViewDetail} useForground>
        <View>
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={{ uri: props.product.imageUrl }}
            />
          </View>
          <View style={styles.details}>
            <Text style={styles.title}>{props.product.title}</Text>
            <Text style={styles.price}>${props.product.price.toFixed(2)}</Text>
          </View>
          <View style={styles.actions}>
            <Button
              color={Colors.primary}
              title="View Details"
              onPress={props.onViewDetail}
            />
            <Button
              color={Colors.primary}
              title="Add To Cart"
              onPress={props.onAddToCart}
            />
          </View>
        </View>
      </Touchable>
    </View>
  );
}

const styles = StyleSheet.create({
  product: {
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
    height: 300,
    margin: 20,
    overflow: "hidden",
  },
  imageContainer: {
    width: "100%",
    height: "60%",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  title: {
    fontFamily: "pt-sans-bold",
    fontSize: 18,
    marginVertical: 2,
  },
  price: {
    fontFamily: "pt-sans",
    fontSize: 14,
    marginVertical: 4,
    color: "#888",
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: "25%",
    paddingHorizontal: 20,
  },
  details: {
    alignItems: "center",
    height: "15%",
    padding: 5,
  },
  touchable: {
    borderRadius: 10,
    overflow: "hidden",
  },
});

export default ProductItem;
