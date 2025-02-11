import React, { useContext } from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { CartContext } from "../../context/CartContext";

const Cart = () => {
  const cart = useContext(CartContext);

  console.log("cart", cart);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>
        🛒 Mon Panier ({cart?.items.length} articles)
      </Text>
      <FlatList
        data={cart?.items}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.item}>
            <Image source={{ uri: item.image }} style={styles.itemImage} />
            <View style={styles.itemDetails}>
              <Text style={styles.itemName}>{item.title}</Text>
              <Text style={styles.itemPrice}>💰 {item.price} €</Text>
              <Text style={styles.itemQuantity}>
                🔢 Quantité : {item.quantity}
              </Text>
              <Text style={styles.itemRating}>
                ⭐ {item.rating.rate} ({item.rating.count} avis)
              </Text>
            </View>
            <TouchableOpacity
              style={styles.deleteButton}
              onPress={() => cart?.removeItem(index)}
            >
              <Text style={styles.deleteText}>❌</Text>
            </TouchableOpacity>
          </View>
        )}
      />
      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Total : 💰 {cart?.totalPrice} €</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f8f8f8",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
  },
  item: {
    flexDirection: "row",
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 8,
    marginVertical: 8,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 2,
  },
  itemImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 10,
  },
  itemDetails: {
    flex: 1,
  },
  itemName: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
  },
  itemPrice: {
    fontSize: 14,
    color: "#27ae60",
    marginBottom: 2,
  },
  itemQuantity: {
    fontSize: 14,
    color: "#2c3e50",
  },
  itemRating: {
    fontSize: 14,
    color: "#f39c12",
  },
  deleteButton: {
    backgroundColor: "#e74c3c",
    padding: 8,
    borderRadius: 8,
  },
  deleteText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  totalContainer: {
    marginTop: 20,
    padding: 16,
    backgroundColor: "#27ae60",
    borderRadius: 8,
    alignItems: "center",
  },
  totalText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
});

export default Cart;
