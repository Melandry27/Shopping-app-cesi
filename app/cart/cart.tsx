import React, { useContext } from "react";
import { FlatList, Text, View } from "react-native";
import { CartContext } from "../../context/CartContext";

const cart = () => {
  const cart = useContext(CartContext);

  return (
    <View>
      <View>Panier : {`${cart?.total}`}</View>
      <FlatList
        data={cart?.items}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Text>{item}</Text>}
      />
    </View>
  );
};

export default cart;
