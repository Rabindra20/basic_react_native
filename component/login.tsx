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
const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const clearTextInput = () => {
    setUsername('')
    setPassword('')
  }
  const saveData = async () => {
      console.warn(username);
      const url = "http://:8000/api/login/";
      let result:any = await fetch(url, {
          method: "POST",
          headers: {
              "Content-Type": "application/json"
          },
          body:JSON.stringify({username:username,password:password})
      });
      result = await result.json();
      console.log("hfhf: ",result['access'])
      await storeToken(result)  // Store Token in Storage
      await getToken()
      console.log('getTokenResult: ', getToken())
      clearTextInput()
      if(result){
          console.warn("Login sucessfully")
      }
  }
  
  return (
      <View>
           <SafeAreaView>
          <ScrollView style={styles.scrollView}>
          {/* <Text style={{ fontSize: 30 }}> Signup </Text> */}
          <TextInput style={styles.input} value={username} onChangeText={(text) => setUsername(text)} placeholder='Enter Username' />{/* {usernameError ? <Text style={styles.errortext}>Please enter Username</Text>:null}*/}
          <TextInput style={styles.input} value={password} onChangeText={(text) => setPassword(text)} placeholder='Enter Password' />
          <Button title='Signup' onPress={saveData} />
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