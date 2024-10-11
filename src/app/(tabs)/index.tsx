import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';

import products from '@/assets/data/products';
import ProductListItem from '@/src/components/ProductListItem';

// Get screen height using Dimensions API


// Child component: the list item
// Parent screen: the menu screen
export default function MenuScreen() {
  return (
    <View>
      <ProductListItem product={products[0]} />
      <ProductListItem product={products[1]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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