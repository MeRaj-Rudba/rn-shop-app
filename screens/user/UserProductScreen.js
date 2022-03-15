import React, { useEffect } from "react";
import { StyleSheet, Alert, FlatList, Button, View, Text } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useSelector, useDispatch } from "react-redux";

import ProductItem from "../../components/shop/ProductItem";
import CustomHeaderButton from "../../components/UI/HeaderButton";
import Colors from "../../constants/Colors";
import products from "../../store/reducers/products";
import * as productAction from "../../store/actions/products";

function UserProductScreen(props) {
  const userProducts = useSelector((state) => state.products.userProducts);
  const { navigation, route } = props;

  const dispatch = useDispatch();

  const deleteHandler = (id) => {
    Alert.alert("Are You sure?", "Do you really want to delete this item?", [
      { text: "No", style: "default" },
      {
        text: "Yes",
        style: "destructive",
        onPress: () => {
          dispatch(productAction.deleteProduct(id));
        },
      },
    ]);
  };

  useEffect(() => {
    navigation.setOptions({
      headerTitle: "Your Products",
      headerLeft: () => (
        <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
          <Item
            title="cart"
            iconName="menu"
            onPress={() => {
              navigation.toggleDrawer();
            }}
          />
        </HeaderButtons>
      ),
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
          <Item
            title="create"
            iconName="plus"
            onPress={() => {
              navigation.navigate("EditProduct", {
                editMode: false,
              });
            }}
          />
        </HeaderButtons>
      ),
    });
  }, [navigation]);

  const editProductHandler = (id) => {
    navigation.navigate("EditProduct", {
      productId: id,
      editMode: true,
    });
  };

  if (userProducts.length === 0) {
    return (
      <View style={styles.centered}>
        <Text>No Products Found!</Text>
        <Text>Start adding some!!</Text>
      </View>
    );
  }
  return (
    <FlatList
      data={userProducts}
      keyExtractor={(item) => item.id}
      renderItem={(itemData) => (
        <ProductItem
          product={itemData.item}
          onSelect={() => {
            editProductHandler(itemData.item.id);
          }}
        >
          <Button
            color={Colors.primary}
            title="Edit"
            onPress={() => {
              editProductHandler(itemData.item.id);
            }}
          />
          <Button
            color={Colors.primary}
            title="Delete"
            onPress={() => {
              deleteHandler(itemData.item.id);
            }}
          />
        </ProductItem>
      )}
    />
  );
}

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default UserProductScreen;
