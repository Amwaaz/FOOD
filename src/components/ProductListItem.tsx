import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, Dimensions, Pressable } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import NetInfo from '@react-native-community/netinfo';
import { Link } from 'expo-router';
import Colors from '@/src/constants/Colors';
import { Product } from '../types';

const { height } = Dimensions.get('window');

const ProductListItem = ({ product }: { product: Product }) => {
  const [data, setData] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    const netInfo = await NetInfo.fetch(); // Check network status

    if (netInfo.isConnected) {
      // Fetch from API if online
      try {
        const response = await fetch('https://simple-grocery-store-api.online/products');
        const result = await response.json();
        setData(result);
        await AsyncStorage.setItem('products', JSON.stringify(result)); // Cache data
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    } else {
      // If offline, load cached data
      const cachedData = await AsyncStorage.getItem('products');
      if (cachedData) {
        setData(JSON.parse(cachedData)); // Use cached data
      }
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return <Text>Loading...</Text>; // Show loading text or spinner while fetching
  }

  return (
    <View style={styles.container}>
      <Link href={`/menu/${product.id}`} asChild>
        <Pressable style={styles.itemBox}>
          <Image source={{ uri: product.image }} style={styles.image} />
          <Text style={styles.title}>{product.name}</Text>
          <Text style={styles.price}>${product.price}</Text>
        </Pressable>
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: '50%',
  },
  itemBox: {
    width: '80%',
    maxWidth: 350,
    margin: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    height: height * 0.5,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  image: {
    width: '90%',
    aspectRatio: 1.5,
    borderRadius: 10,
    marginBottom: 10,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginVertical: 5,
    textAlign: 'center',
    color: '#00004D',
  },
  price: {
    color: '#00004D',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default ProductListItem;
