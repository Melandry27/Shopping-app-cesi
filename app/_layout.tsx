import { Ionicons } from "@expo/vector-icons";
import { Stack, useRouter } from "expo-router";
import { useContext } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { CartContext, CartProvider } from "../context/CartContext";

export default function Layout() {
  return (
    <CartProvider>
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            headerTitle: () => <HeaderComponent />,
          }}
        />
        <Stack.Screen
          name="category/[slug]"
          options={{
            headerTitle: () => <HeaderComponent />,
          }}
        />
        <Stack.Screen
          name="cart/cart"
          options={{
            headerTitle: () => <HeaderComponent />,
          }}
        />
      </Stack>
    </CartProvider>
  );
}

const HeaderComponent = ({}) => {
  const router = useRouter();
  const cart = useContext(CartContext);

  return (
    <View style={styles.headerContainer}>
      <Text style={styles.title}>Mon Titre Global</Text>
      <TouchableOpacity
        style={styles.cartButton}
        onPress={() => router.push("/cart/cart")}
      >
        <Ionicons name="cart" size={24} color="black" />
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{cart?.total}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  cartButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  badge: {
    backgroundColor: "red",
    borderRadius: 50,
    width: 20,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 8,
  },
  badgeText: {
    color: "white",
    fontSize: 12,
  },
});
