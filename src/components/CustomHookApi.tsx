import { useState,useEffect } from "react";

const CustomHookApi = (url: string | URL | Request) =>{

    const [data, setData] = useState();

    useEffect(()=>{
        getProducts();
    },[])

const getProducts = async () => {
    try {
      
      const response = await fetch(url, {
        mode: 'no-cors', 
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const json = await response.json();
      console.log("fetched data 2: ",json);
      setData(json);
    } catch (error) {
      console.error(error);
    } 
  };

  return {data}

}

export default CustomHookApi