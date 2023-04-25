import {
  Text,
  useColorScheme,
  View,
  Button,
  TextInput,
  StyleSheet,
} from 'react-native';
import React, { useEffect, useState } from 'react'
// import { useLoginUserMutation } from '../services/apiauth'
import { storeToken,getToken } from '../services/token';

export const Dashboard = () => {
  const[data,setData]=useState([])
  const getprofile = async () => {
    const token = await getToken();
    console.log('token identified', token)
    const url = "http://:8000/api/profile/";
    let result = await fetch(url, {
    method: 'GET',
    headers: {
      'authorization': `Bearer ${token}`}
    });
    result = await result.json();
    console.warn(result);
    if (result){
      setData(result);
    }
  }
  useEffect(()=>{
    getprofile();
  },[])

  return (
    <View>
      {/* <Text>Dashboard Screen</Text> */}
      {
        data.length?
        data.map((item)=><View>
          <Text>{item.username}</Text>
          </View>)
          :null 
      }
    </View>
  )
};

export default Dashboard