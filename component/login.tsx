import {
    Text,
    View,
    Button,
    StyleSheet,
    TextInput,
    ScrollView, 
    TouchableWithoutFeedback
} from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Toast from 'react-native-toast-message';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native'

import { useLoginUserMutation } from '../services/apiauth'
import { storeToken } from '../services/token';
// import

const Login = () => {
  const navigation = useNavigation()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const clearTextInput = () => {
    setEmail('')
    setPassword('')
  }

  const [loginUser] = useLoginUserMutation()

  const handleFormSubmit = async () => {
    const formData = { email, password }
    const res = await loginUser(formData)
    if (res.data) {
      // console.log("Response Data", res.data)
      await storeToken(res.data.token)  // Store Token in Storage
      clearTextInput()
      navigation.navigate('Dashboard')
    }
    if (res.error) {
      // console.log("Response Error", res.error.data.errors)
    }
  }

  return (
    <SafeAreaView>
      <ScrollView keyboardShouldPersistTaps='handled'>
        <View style={{ marginHorizontal: 30 }}>
          <View style={{ alignSelf: 'center', marginBottom: 10 }}>
            <MaterialIcon name='shopping-bag' color='purple' size={100} />
          </View>
          <View style={[ { marginBottom: 10 }]}>
            <Text >Email</Text>
            <TextInput  value={email} onChangeText={setEmail} placeholder="Write Your Email" keyboardType='email-address' />
          </View>
          <View >
            <Text>Password</Text>
            <TextInput  value={password} onChangeText={setPassword} placeholder="Write Your Password" secureTextEntry={true} />
          </View>
          <View style={{ width: 200, alignSelf: 'center', margin: 20 }}>
            <Button title='Login' onPress={handleFormSubmit} color='purple' />
          </View>
          <View style={{ flexDirection: 'row' }}>
            <View style={{ flex: 1 }}>
              <TouchableWithoutFeedback onPress={() => { navigation.navigate('Signup') }}>
                <Text style={{ fontWeight: 'bold' }}>New User? Registration</Text>
              </TouchableWithoutFeedback>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  //   <View>
  //   <Text>dd</Text>
  // </View>
  )
}

export default Login