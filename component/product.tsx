import {
    Text,
    View,
    StyleSheet,
    Button,
    Image
  } from 'react-native';

// to the dispatch function from the Redux store
import { useDispatch } from 'react-redux';
import { addtocard } from './redux/action';

  const Product=(Props:any)=>{
    // const item = {...Props}
    const item = Props.item
    const dispatch= useDispatch();
    //arrow function
    const handleraddtocart= (item:any)=>{
    // console.warn("call",Props.item)

    console.warn("call",item)

    //send to redux action
    dispatch(addtocard(Props.item));
    }
    return (
        <View>
          <Text style={{fontSize: 20, borderBottomColor: 'red', borderBottomWidth: 2, margin: 2,}}/>
          <Text style={styles.input}>{item.name}</Text>
          <Text style={styles.input}>{item.Colors}</Text>
          <Text style={styles.input}>{item.price}</Text>
          <Image style={{height: 100, width: 100}} source={{uri:item.images}} />
          {/* <Button title='Add cart' onPress={handleraddtocart(item)} /> */}
          <Button title='Add cart'onPress ={()=>handleraddtocart(item)} />
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