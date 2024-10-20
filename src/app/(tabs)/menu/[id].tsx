import { useLocalSearchParams, Stack, useRouter } from "expo-router";
import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import products from "@/assets/data/products";
import { useState } from "react";
import Button from "@/src/components/Buttons";
import { useCart } from "@/src/providers/CartProvider";
import { PizzaSize } from "@/src/types";

const router=useRouter();

const sizes: PizzaSize[] = ["S", "M", "L", "XL"];

const ProductDetailScreen = () => {
  const [selectSize, setSelectSize] = useState<PizzaSize>("S");

  const { id } = useLocalSearchParams();
  const product = products.find((p) => p.id.toString() === id);

  const { addItem } = useCart();

  const addToCart = () => {
    if (!product) {
      return;
    }
    addItem(product, selectSize);
    router.push('/cart');
  };

  if (!product) {
    <Text>Product not found!</Text>;
  }

  return (
    <View style={styles.container}>
      {/* changing the screen name */}
      <Stack.Screen
        options={{
          title: product?.name,
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 20,
          },
        }}
      />

      <Image source={{ uri: product?.image }} style={styles.image} />

      <Text style={{ fontSize: 22, fontWeight: "bold" }}>Select Size:</Text>

      <View style={styles.sizes}>
        {
          sizes.map(
            (size) => (
              <Pressable
                onPress={() => {
                  setSelectSize(size);
                }}
                style={[
                  styles.size,
                  {
                    backgroundColor:
                      selectSize === size ? "#00004D" : "#D3D3D3",
                  },
                ]}
                key={size}
              >
                <Text
                  style={[
                    styles.sizeText,
                    {
                      color: selectSize === size ? "white" : "black",
                    },
                  ]}
                >
                  {size}
                </Text>
              </Pressable>
            ) //map ka resultant func
          ) //main map
        }
        {/* end view */}
      </View>

      <Text style={styles.price}>Price: ${product?.price}</Text>

      <Button onPress={addToCart} text="Add to cart"/>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  image: {
    width: "100%",
    aspectRatio: 1,
    maxHeight: 200,
    resizeMode: "contain",
    marginBottom: 10,
  },
  price: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#00004D",
    textAlign: "center",
    marginTop: 20,
    marginBottom: 20,
  },
  sizes: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginVertical: 20,
  },
  size: {
    width: 35,
    height: 35,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#D3D3D3",
  },
  sizeText: {
    color: "black",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default ProductDetailScreen;

//for the conditional styling, putting existing styles into array

//for the styling AI centers them vertically and JC horizontally. to sizes k dabbe ko jo main wala hai jismain 4 size hain usmain JC space around taake chaaron size equal distance pe hon. aur AI taake vertically bhi center main. Aur size main yani aik aik ka usmain usmain JC center taake text center hojai aur Jc bhi

//we have dynamic routes in expo router
// we need to have a variable that corresponds to that dynamic part of the url  [id] now from ProductListItem we need to receive the id here

//useLocalSearchParams returns an object containing parameteers from the route(hmara route id k sath tha) phir uss object main se hmne id extract kia

//hmne iss file ko dala app main lekin(tabs) k bahir which is why hmain bottom pe tabs nzr nhi ata jb hm detail pe jate

//menu tab jo hai usmain do screens aaien gi. the menu and details wali. jb hm details pe jaien ge tb tab neeche se change nhi hoga. so nested navigator. tab navigator k andr stack navigator taake menu aur details main ja sken

//they shouldnt appear as separate pages on the bottom tab footer. jb sirf menu index aur id ko meny folder main move kia tb ye hua k orders  menu/index  menu/id

//This is an arrow function used as the argument for find(). It runs for each element in the products array.

// p: Represents the current product in the products array during each iteration. p.id.toString(): Converts the id of the current product p (which is likely a number) to a string. This is done to ensure it's compared as a string with id.'?' for if the name is null.product?.name. without the product checking "if"

//when learning about managing sizes. "STATE": can keep track of data that changes and based on that the component will re render to refleact those changes on the UI
