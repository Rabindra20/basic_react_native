import React, { useState } from 'react';
import {
    Text,
    useColorScheme,
    View,
    Button,
    TextInput,
    StyleSheet,
    ScrollView,
    SafeAreaView
} from 'react-native';
import { getToken, storeToken } from '../services/token';
import { useLoginUserMutation } from '../services/apiauth';
import { NavigationContainer, useNavigation } from '@react-navigation/native';

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const clearTextInput = () => {
    setUsername('')
    setPassword('')
  }
  const navigation:any = useNavigation()

  const saveData = async () => {
      console.warn(username);
      const url = "https://be93-163-53-25-152.ngrok-free.app/api/login/";
      let result:any = await fetch(url, {
          method: "POST",
          headers: {
              "Content-Type": "application/json"
          },
          body:JSON.stringify({username:username,password:password})
      });
      result = await result.json();
    //   console.log("hfhf: ",result['access'])

      await storeToken(result)// Store Token in Storage
    //   await storeToken(result['access'])  // Store access Token in Storage 

    //  Checking Token while is store in storage
    //   const token = await getToken()
    //   await getToken()
    //   console.log('token ***', token)
    //   console.log('getTokenResult: ', getToken())
      clearTextInput()

      if(result){
          console.warn("Login sucessfully")
          navigation.navigate('Dashboard')

      }
  }

const Signup=() =>{
    navigation.navigate('Signup', { screen: 'Signup' })
  }

  return (
      <View>
          <SafeAreaView>
          <ScrollView style={styles.scrollView}>
          {/* <Text style={{ fontSize: 30 }}> Signup </Text> */}
          <TextInput style={styles.input} value={username} onChangeText={(text) => setUsername(text)} placeholder='Enter Username' />{/* {usernameError ? <Text style={styles.errortext}>Please enter Username</Text>:null}*/}
          <TextInput style={styles.input} value={password} onChangeText={(text) => setPassword(text)} placeholder='Enter Password' />
          <Button title='Login' onPress={saveData} />
          <Text>Please create account</Text>
          <Button title='Signup' onPress={Signup} />
          </ScrollView>
          </SafeAreaView>
      </View>
      
  )
};
const styles = StyleSheet.create({
  input: {
      borderColor: 'skyblue',
      borderWidth: 1,
      margin: 25,
      padding: 1
      


  },
  errortext:{
      color:'red'
  },
  scrollView: {
      backgroundColor: 'white',
      marginHorizontal: 20,
    },
})

export default Login