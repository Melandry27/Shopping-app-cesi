import { useLocalSearchParams } from "expo-router";
import { useContext } from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { CartContext } from "../../context/CartContext";

const products = {
  sweat: [
    {
      name: "Sweat Noir",
      image: "https://via.placeholder.com/150/000000/FFFFFF/?text=Sweat+Noir",
    },
    {
      name: "Sweat Blanc",
      image: "https://via.placeholder.com/150/FFFFFF/000000/?text=Sweat+Blanc",
    },
    {
      name: "Sweat Bleu",
      image: "https://via.placeholder.com/150/0000FF/FFFFFF/?text=Sweat+Bleu",
    },
  ],
  tshirt: [
    {
      name: "T-shirt Rouge",
      image:
        "https://via.placeholder.com/150/FF0000/FFFFFF/?text=T-shirt+Rouge",
    },
    {
      name: "T-shirt Vert",
      image: "https://via.placeholder.com/150/00FF00/FFFFFF/?text=T-shirt+Vert",
    },
    {
      name: "T-shirt Jaune",
      image:
        "https://via.placeholder.com/150/FFFF00/000000/?text=T-shirt+Jaune",
    },
  ],
  pantalon: [
    {
      name: "Jean Slim",
      image: "https://via.placeholder.com/150/808080/FFFFFF/?text=Jean+Slim",
    },
    {
      name: "Jogging",
      image: "https://via.placeholder.com/150/000000/FFFFFF/?text=Jogging",
    },
    {
      name: "Pantalon Cargo",
      image:
        "https://via.placeholder.com/150/654321/FFFFFF/?text=Pantalon+Cargo",
    },
  ],
  chaussure: [
    {
      name: "Nike Air",
      image: "https://via.placeholder.com/150/FF5733/FFFFFF/?text=Nike+Air",
    },
    {
      name: "Adidas Superstar",
      image:
        "https://via.placeholder.com/150/33FF57/FFFFFF/?text=Adidas+Superstar",
    },
    {
      name: "Converse",
      image: "https://via.placeholder.com/150/5733FF/FFFFFF/?text=Converse",
    },
  ],
};

export default function CategoryPage() {
  const { slug } = useLocalSearchParams();
  const categorySlug = Array.isArray(slug) ? slug[0] : slug;
  const categoryProducts =
    products[categorySlug as keyof typeof products] || [];
  const cart = useContext(CartContext);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Catégorie : {slug}</Text>
      <FlatList
        data={categoryProducts}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => cart?.addItem(item.name)}>
            <View style={styles.productCard} key={item.name}>
              <Image source={{ uri: item.image }} style={styles.productImage} />
              <Text style={styles.productName}>{item.name}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    alignItems: "center",
    paddingTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  productCard: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 2,
    alignItems: "center",
    margin: 20,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  productImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  productName: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: "bold",
  },
});
