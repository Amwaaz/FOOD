import { createContext, PropsWithChildren, useContext, useState } from "react";
import { CartItem, Product } from "../types";

type CartType={
  items:CartItem[],
  addItem:(product:Product,size:CartItem['size'])=>void;
}

const CartContext = createContext<CartType>({
  items:[],
  addItem:()=>{},
});

const CartProvider=({children}:PropsWithChildren)=>{
  const[items,setItems]=useState<CartItem[]>([]);
  
  const addItem=(product:Product,size:CartItem['size'])=>{ 
    //incrementing quantity so generate id
    
    const newCartItem:CartItem={
      id:'1', 
      product,
      product_id:product.id,
      size,
      quantity:1,
    };
    setItems([newCartItem,...items])
  
  };

  console.log(items)

    return(
      <CartContext.Provider 
      value={{
        items, 
        addItem
        }}>
        {children}
      </CartContext.Provider>  
    )
}


export default CartProvider;
//to avoid import useContext and CartContext everywhere we combine it by

export const useCart=()=>useContext(CartContext);





//doing this so we can access cart page and state of cart from multiple points

//all children in CartProvider will have access to things of CartContext.Provider

//hmain isko props nhi dene pren ge jahan doosri jaga ja k isko use cz ye specific hai iska mltb hai k whatever is inside the tag.

//also we used it in the main layout file of app folder cz wahan pe use krne ka mtlb k poori app k ird gird wrap krna. 

// so jo kuchh wahan pe kia hai use inside the tag wo sb idhr {children} main arha which means we have access to         <Stack>
        //   <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        //   <Stack.Screen name="cart" options={{ presentation: "modal" }} />
        // </Stack>

