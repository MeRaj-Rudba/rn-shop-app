import React, { useEffect, useState } from "react";
import { StyleSheet, View, FlatList, Text } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useSelector, useDispatch } from "react-redux";
import OrderItem from "../../components/shop/OrderItem";
import * as orderActions from "../../store/actions/order";
import CustomHeaderButton from "../../components/UI/HeaderButton";
import Colors from "../../constants/Colors";
import ThemeLoader from "../../components/UI/ThemeLoader";

function OrdersScreen(props) {
  const [isLoading, setIsLoading] = useState(false);
  const orders = useSelector((state) => state.orders.orders);
  const { navigation, route } = props;
  const dispatch = useDispatch();

  useEffect(() => {
    setIsLoading(true);
    dispatch(orderActions.fetchOrders()).then((res) => {
      setIsLoading(false);
    });
  }, [dispatch]);

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

  if (isLoading) {
    return <ThemeLoader size="large" color={Colors.primary} />;
  }
  if (!isLoading && orders.length === 0) {
    return (
      <View style={styles.centered}>
        <Text>No Product found!</Text>
        <Text>Start Adding Some</Text>
      </View>
    );
  }

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
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default OrdersScreen;
