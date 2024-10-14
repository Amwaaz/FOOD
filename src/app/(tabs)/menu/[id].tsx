import { useLocalSearchParams,Stack } from 'expo-router';
import {View,Text,Image,StyleSheet} from 'react-native';
import products from '@/assets/data/products';


const ProductDetailScreen= () => {
  const {id} = useLocalSearchParams();
  const product=products.find((p)=>p.id.toString()===id);

  if(!product){
    <Text>Product not found!</Text>
  }
 
    return (
        <View style={styles.container}>
{/* changing the screen name */}
          <Stack.Screen 
          options={{
          title:product?.name,
          headerTitleAlign: 'center',
          headerTitleStyle:{
            fontWeight:'bold',
            fontSize:24,
        }
        }}/>

         <Image source={{uri:product?.image}} style={styles.image}/>

         <Text style={{fontSize:22,
    fontWeight:'bold',}}>Select Size:</Text>
    

         <Text style={styles.price}>{[product?.price]}</Text>
         
        </View>
    )
};

const styles = StyleSheet.create({
  container:{
    padding:10,
  },
  image: {
    width: '100%', 
    aspectRatio:1,   
    maxHeight:300,
    resizeMode: 'contain', 
    marginBottom: 20, 
  },
  price:{
    fontSize:26,
    fontWeight:'bold',
    color:"#2A3439",
    textAlign:'center',
    marginTop:100,
  }
});




export default ProductDetailScreen;



//we have dynamic routes in expo router
// we need to have a variable that corresponds to that dynamic part of the url  [id] now from ProductListItem we need to receive the id here

//useLocalSearchParams returns an object containing parameteers from the route(hmara route id k sath tha) phir uss object main se hmne id extract kia 

//hmne iss file ko dala app main lekin(tabs) k bahir which is why hmain bottom pe tabs nzr nhi ata jb hm detail pe jate

//menu tab jo hai usmain do screens aaien gi. the menu and details wali. jb hm details pe jaien ge tb tab neeche se change nhi hoga. so nested navigator. tab navigator k andr stack navigator taake menu aur details main ja sken

//they shouldnt appear as separate pages on the bottom tab footer. jb sirf menu index aur id ko meny folder main move kia tb ye hua k orders  menu/index  menu/id

//This is an arrow function used as the argument for find(). It runs for each element in the products array.

// p: Represents the current product in the products array during each iteration. p.id.toString(): Converts the id of the current product p (which is likely a number) to a string. This is done to ensure it's compared as a string with id.'?' for if the name is null.product?.name. without the product checking "if"
