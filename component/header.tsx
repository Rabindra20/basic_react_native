import { useState,useEffect } from 'react';
import {
    Text,
    View,
  } from 'react-native';
import { useSelector } from 'react-redux';

  
  const Header=()=>{
    const cartData:any = useSelector((state:any)=> state.reducer);
    // console.warn(cartData);
    const [cartItems, setCartItems] = useState(0)
    useEffect(()=>{
        setCartItems(cartData.length);
        // console.warn(cartData.length)
      },[cartData]) 
    return (
        <View>
          <Text style={{fontSize: 20}}>{cartItems}</Text>
        </View>  
  );
}
export default Header