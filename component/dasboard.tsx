import {
  Text,
  useColorScheme,
  View,
  Button,
  TextInput,
  StyleSheet,
} from 'react-native';
import React, { useEffect, useState } from 'react'
import { getToken,removeToken } from '../services/token';
import { useNavigation } from '@react-navigation/native'


export const Dashboard = () => 
{
  //Use state for token
  const [token, setToken] = useState({})
  //Use state for data
  const[data,setData]=useState([])
  const navigation:any = useNavigation()

  const getprofile = async () => {
    // Get token
    const token = await getToken()
    // console.warn('Token', token)
    if (token) {
      const { access, refresh } = JSON.parse(token)
      setToken({
        "access": access,
        "refresh": refresh
      })
      // console.log('token identified', access)
    const url = "https://be93-163-53-25-152.ngrok-free.app/api/profile/";
    let result:any = await fetch(url, {
    method: 'GET',
    headers: {
      // Taken access Token
      'authorization': `Bearer ${access}`}
    });

    //checking AccesToken and navigate
    if (access) {
      navigation.navigate('Dashboard', { screen: 'Dashboard' })
    } else {
      navigation.navigate('Login')
    }

    result = await result.json();
    console.warn(result);
    if (result){
      setData(result);
    }
  }
}

//For Logout
const Logout = async ()=>{
    await removeToken()
    navigation.navigate("Login");
    console.log("Logout")
    

}
  useEffect(()=>{
    getprofile();
  },[])

  return (
    <View>
      {
        data ?
          <Text style={{fontSize:20}}>Welcome to Dashboard {data.username}</Text>
          :null 
      }
      <Button title='Logout' onPress={Logout} />
    </View>
  )
};

export default Dashboard