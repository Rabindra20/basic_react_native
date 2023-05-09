import {
    Text,
    View,
    StyleSheet,
    Button,
    Image
  } from 'react-native';

// to the dispatch function from the Redux store
import { useDispatch, useSelector } from 'react-redux';
import { addtocard, removefromcard } from './redux/action';
import { useEffect, useState } from 'react';



  const Product=(Props:any)=>{
    // const item = {...Props}
    const item = Props.item
    const dispatch= useDispatch();

    //redux state
    const cartItems = useSelector((state:any)=>state.reducer);

    //arrow function
    const handleraddtocart= (item:any)=>{
    // console.warn("call",Props.item)

    console.warn("call",item)

    //send to redux action
    // dispatch(addtocard(Props.item));
    dispatch(addtocard(item))
    }
    const handlerremovefromcart= (item:any)=>{
      // console.warn("call",Props.item)

      // Take item.name
      dispatch(removefromcard(item.name))
      
    }
    const [isAdded,setIsAdded]=useState(false)
    useEffect(()=>{
    // if(cartItems && cartItems.length){
    //  cartItems.forEach((element:any)=>{
    //   // console.warn(element)
    //   if (element.name===item.name){
    //     setIsAdded(true)
    //   }
    //  })
    // }
    let result = cartItems.filter((element:any)=>{
      return element.name === item.name
    });console.log(result)
    if(result.length){
      setIsAdded(true)
    }else{
      setIsAdded(false)
    }
    },[cartItems])
    return (
        <View style={{margin: 20}} >
          <Text style={{fontSize: 20, borderBottomColor: 'red', borderBottomWidth: 2, margin: 2,}}/>
          <Text style={styles.input}>{item.name}</Text>
          <Text style={styles.input}>{item.Colors}</Text>
          <Text style={styles.input}>{item.price}</Text>
          <Image style={{height: 100, width: 100}} source={{uri:item.images}} />
          {/* <Button title='Add cart' onPress={handleraddtocart(item)} /> */}
          {
            isAdded?
            <Button title='Remove from cart' onPress ={()=>handlerremovefromcart(item)} />
            :
            <Button title='Add To cart' onPress ={()=>handleraddtocart(item)} />
          }
          
        </View>
  );
}
const styles = StyleSheet.create({
    input: {
        fontSize: 25,
        alignItems: 'center',
        justifyContent: 'center'
        
    }})

export default Product

// function setIsAdded(arg0: boolean) {
//   throw new Error('Function not implemented.');
// }
