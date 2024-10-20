import { StatusBar } from "expo-status-bar";
import { View, Platform,FlatList} from "react-native";
import { useCart } from "../providers/CartProvider";
import CartListItem from "../components/CartListItem";


const CartScreen=()=>{
    const{items}=useCart();

    return (
        <View>
            <FlatList 
            data={items}
            renderItem={({item})=><CartListItem cartItem={item}/>}
            contentContainerStyle={{padding:10,gap:10}}
            />
            <StatusBar style={Platform.OS === 'android' ? 'light' : 'auto'} />
        </View>
    )
}

export default CartScreen; 


//cartprovider main provide kre ga
//yahan se hm usse consume kren ge context ko

// CartContext is creating the context. isse ye hoga k hmne bnaya custom component cartprovider jismain CartContext provide kr rha hai.

//phir yahan aa k hmne usse krna hai consume

//wo aese k hmne useContext k hook ko diya CartContext then we can access the values inside the CartContext.Provider .

// so from cart screen we can access cart context and we take it to the provider,  since we also wrapped it around the main layout we have the provider access from everywhere. menu se bhi aur details screen se bhi


//{aik aur main cheez is k src main aayega providers phir wahan se create context then in custom component ussi context se krwaien ge provide phir ussi provider wale component ko wrap krden ge around everything in main layout unn screens k ird gird jahan se zaruri hai access. phir hm cart main aaien ge(app) wahan pe hm use kren ge wo context   "export const useCart=()=>useContext(CartContext);"   and the items in the provider }

