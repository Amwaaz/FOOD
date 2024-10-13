import { useLocalSearchParams,Stack } from 'expo-router';
import {View,Text} from 'react-native';


const ProductDetailScreen= () => {
  const {id} = useLocalSearchParams();
 
    return (
        <View>
{/* changing the screen name */}
          <Stack.Screen 
          options={{
          title:'DETAILS: ' + id,
          headerTitleAlign: 'center',
          headerTitleStyle:{
            fontWeight:'bold',
            fontSize:24,
        }
        }}/>

          <Text>ProductDetailScreen for id : {id}</Text>
        </View>
    )
};

export default ProductDetailScreen;



//we have dynamic routes in expo router
// we need to have a variable that corresponds to that dynamic part of the url  [id] now from ProductListItem we need to receive the id here

//useLocalSearchParams returns an object containing parameteers from the route(hmara route id k sath tha) phir uss object main se hmne id extract kia 

//hmne iss file ko dala app main lekin(tabs) k bahir which is why hmain bottom pe tabs nzr nhi ata jb hm detail pe jate

//menu tab jo hai usmain do screens aaien gi. the menu and details wali. jb hm details pe jaien ge tb tab neeche se change nhi hoga. so nested navigator. tab navigator k andr stack navigator taake menu aur details main ja sken

//they shouldnt appear as separate pages on the bottom tab footer. jb sirf menu index aur id ko meny folder main move kia tb ye hua k orders  menu/index  menu/id