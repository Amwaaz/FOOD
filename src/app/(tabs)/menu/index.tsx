import { StyleSheet, FlatList } from "react-native";
import products from "@/assets/data/products";
import ProductListItem from "@/src/components/ProductListItem";

// Child component: the list item
// Parent screen: the menu screen

//Flatlist main data is what should be rendered and renderitem is the function k kese un cheezon ko render krna hai. The function receives an object as its parameter, and that object has a property called item.

//app folder is specific to expo router. expo router is file based navigation. based on files, expo router automatically creates screens and navigation bw them .

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

// card: {
//   backgroundColor: 'white',
//   borderRadius: 15,
//   padding: 20,
//   shadowColor: '#000',
//   shadowOffset: {
//     width: 0,
//     height: 2,
//   },
//   shadowOpacity: 0.25,
//   shadowRadius: 3.5,
//   elevation: 5,
//   width: '50%',
// },
