import { Link } from "expo-router";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const categories = [
  {
    name: "T-shirt",
    image: require("../assets/catégories/tshirt.jpg"),
    link: "tshirt",
  },
  {
    name: "Sweat",
    image: require("../assets/catégories/sweat.jpg"),
    link: "sweat",
  },
  {
    name: "Pantalon",
    image: require("../assets/catégories/pantalon.jpg"),
    link: "pantalon",
  },
  {
    name: "Chaussure",
    image: require("../assets/catégories/chaussure.jpg"),
    link: "chaussure",
  },
];

export default function Page() {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={categories}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2}
        renderItem={({ item }) => (
          <View style={styles.category}>
            <Link href={`/category/${item.link}`}>
              <Image source={item.image} style={styles.categoryImage} />
            </Link>
            <Text style={styles.categoryName}>{item.name}</Text>
          </View>
        )}
        contentContainerStyle={styles.categories}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
  categories: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: 24,
  },
  category: {
    width: "48%",
    alignItems: "center",
    marginBottom: 16,
  },
  categoryImage: {
    width: 100,
    height: 100,
    marginBottom: 8,
  },
  categoryName: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
