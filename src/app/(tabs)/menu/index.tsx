import { StyleSheet, FlatList } from "react-native";
import products from "@/assets/data/products";
import ProductListItem from "@/src/components/ProductListItem";
import { MasonryFlashList } from "@shopify/flash-list";


export default function MenuScreen() {
  return (
    <FlatList
      data={products}
      renderItem={({ item }) => <ProductListItem product={item} />}
      numColumns={2}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});

