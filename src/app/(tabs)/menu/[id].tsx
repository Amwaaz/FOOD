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



