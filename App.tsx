import React from 'react';
import {
  Text,
  useColorScheme,
  View,
  Button,
  TextInput,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';
// import Bio_data from './component/bio_data';
// import Usestate from './component/usestate';
// import Props from './component/props';
// import Stylesheet from './component/stylesheet';
// import Form from './component/form';
// import Buttonstyle from './component/button';
import Login from './component/login';
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from '@react-navigation/native';
import { Dashboard } from './component/dasboard';
import Signup from './component/signup';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { useLoginUserMutation } from './services/apiauth'
import { removeToken } from './services/token';
import { useNavigation } from '@react-navigation/native'

// if you import component in { component } then need to Export a function as a named export
import Usestate from './component/usestate'

// import Header from './component/header';
import Product from './component/product';

import { useState,useEffect } from 'react';
import { useSelector } from 'react-redux';
// import Student from './component/componentclass';

const Stack = createNativeStackNavigator();
function App(){
  
  const isDarkMode = useColorScheme() === 'dark';
  const Logout = async ()=>{
    const navigation:any = useNavigation()
    // console.warn(val)
      await removeToken()
      navigation.navigate("Login");
      console.log("Logout")
      

}
const cartData:any = useSelector((state:any)=> state.reducer);
// console.warn(cartData);
const [cartItems, setCartItems] = useState(0)
useEffect(()=>{
    setCartItems(cartData.length);
    // console.warn(cartData.length)
  },[cartData])
  return (
        // <View
        //   style={{
        //     backgroundColor: isDarkMode ? Colors.black : Colors.white,
        //   }}>
            
        //   {/* <TEST /> */}

        //   {/* Implement folder wise component */}
        //   {/* <Bio_data /> */}

        //   {/* Implement button component */}
        //   {/* <Buttonstyle /> */}

        //   {/* implement state */}
        //   {/* <Usestate />  */}

        //   {/* Implement props */}
        //   {/* <Props /> */}

        //   {/* Implement style */}
        //   {/* <Stylesheet /> */}
          
        //   {/* Implement form */}
        //   {/* <Form /> */}

        //   {/* Implement array and list */}

        //   {/* <Login /> */}

      <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: 'purple' }, headerTintColor: 'white' }}>
       <Stack.Screen name="Signup" component={Signups} options={{ title: 'Registration', headerBackVisible: false }}  />
       <Stack.Screen name="Login" component={Login} options={{ title: 'Login', headerBackVisible: true }}  />
       {/* <Stack.Screen name="Usestate" component={Usestate} options={{ title: 'Usestate', headerBackVisible: true }}  /> */}
      <Stack.Screen name="Re_dux" component={Re_dux} options={{ title: 'Re_dux', headerBackVisible: true   ,
      headerRight: (props:any) => (
    <View>
      <Text style={{ fontSize:25, color:'white'}}>{cartItems}</Text>
    </View>),}}  />
      <Stack.Screen name="Dashboard" component={Dashboard} options={{ title: 'Dashboard', headerBackVisible: true ,
  headerRight: (props:any) => (
    <Button
      // onPress={() => alert('Hi this is test')}
      onPress={Logout} 
      // onPress={() => props.navigation.navigate(Logout)}
      title="Test"
      color="#000"
    />),}} />
      </Stack.Navigator>
    </NavigationContainer>
      //  {/* <Signup /> */} 
        //  </View>
  );
};

const Signups = (Props: { navigation: { navigate: (arg0: string) => void; }; })=> {
 return (
 <><View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} />
 <Signup></Signup>
 <Button title='Login ' onPress={() => Props.navigation.navigate("Login")} />
 {/* <Button title='Usestate ' onPress={() => Props.navigation.navigate("Usestate")} /> */}
  <Button title='Re_dux ' onPress={() => Props.navigation.navigate("Re_dux")} />
 </>
)
}
  export const Re_dux= () => {
 const product=[{
  id: '0',
  name: 'sss',
  Colors: 'white',
  price: '5000',
  images:'https://as2.ftcdn.net/v2/jpg/05/36/24/13/1000_F_536241340_GsrsNhcWC0hyTVaJLilNafyDw6fl0cC8.jpg'
 },
 {
  id: '1',
  name: 'test',
  Colors: 'black',
  price: '4000',
  images: 'https://as2.ftcdn.net/v2/jpg/05/36/24/13/1000_F_536241340_GsrsNhcWC0hyTVaJLilNafyDw6fl0cC8.jpg'
 },
 {
  id: '2',
  name: 'gsrs',
  Colors: 'red',
  price: '7000',
  images:'https://as2.ftcdn.net/v2/jpg/05/36/24/13/1000_F_536241340_GsrsNhcWC0hyTVaJLilNafyDw6fl0cC8.jpg'
 }

 ]
  return (
    <View>
      {/* <Text>gg</Text> */}
      {/* <Student></Student> */}
      {/* <Header /> */}
      <ScrollView>
      {
        product.map((item)=><Product item={item}/>)
      }
      </ScrollView>

    </View>
  )
}
export default App;
