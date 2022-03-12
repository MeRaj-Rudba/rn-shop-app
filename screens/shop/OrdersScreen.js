import React, { useEffect } from "react";
import { StyleSheet, View, FlatList, Text } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useSelector } from "react-redux";
import OrderItem from "../../components/shop/OrderItem";
import CustomHeaderButton from "../../components/UI/HeaderButton";

function OrdersScreen(props) {
  const orders = useSelector((state) => state.orders.orders);
  const { navigation, route } = props;

  useEffect(() => {
    navigation.setOptions({
      headerTitle: "Your Orders",
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
    });
  }, [navigation]);

  return (
    <FlatList
      data={orders}
      keyExtractor={(item) => item.id}
      renderItem={(itemdata) => (
        <OrderItem
          date={itemdata.item.readableDate}
          amount={itemdata.item.totalAmount}
          items={itemdata.item.items}
        />
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default OrdersScreen;
