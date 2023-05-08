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

const Signup = () => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [first_name, setFirst_name] = useState('')
    const [last_name, setLast_name] = useState('')
    const [password, setPassword] = useState('')
    const [Confirm_Password, setConfirm_password] = useState('')
    // const [usernameError, setUsernameError] = useState('false')

    //clear text
    const clearTextInput = () => {
        setUsername('')
        setPassword('')
        setEmail('')
        setFirst_name('')
        setLast_name('')
        setConfirm_password('')
      }
    const saveData = async () => {
        // if(!username){
        //     setUsernameError(true)
        // }
        // if(!username){
        //     return false
        // }
        console.warn(username);
        const url = "https://be93-163-53-25-152.ngrok-free.app/api/register/";
        let result = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body:JSON.stringify({username:username,email:email,first_name:first_name,last_name:last_name,password:password,Confirm_Password:Confirm_Password})
        });
        result = await result.json();

        //clean text
        clearTextInput()
        if(result){
            console.warn("Signup sucessfully")
        }
    }
    return (
        <View>
             <SafeAreaView>
            <ScrollView style={styles.scrollView}>
            {/* <Text style={{ fontSize: 30 }}> Signup </Text> */}
            <TextInput style={styles.input} value={username} onChangeText={(text) => setUsername(text)} placeholder='Enter Username' />{/* {usernameError ? <Text style={styles.errortext}>Please enter Username</Text>:null}*/}
            <TextInput style={styles.input} value={email} onChangeText={(text) => setEmail(text)} placeholder='Enter Email' />
            <TextInput style={styles.input} value={first_name} onChangeText={(text) => setFirst_name(text)} placeholder='Enter First Name' />
            <TextInput style={styles.input} value={last_name} onChangeText={(text) => setLast_name(text)} placeholder='Enter Last Name' />
            <TextInput style={styles.input} value={password} onChangeText={(text) => setPassword(text)} placeholder='Enter Password' />
            <TextInput style={styles.input} value={Confirm_Password} onChangeText={(text) => setConfirm_password(text)} placeholder='Enter Confirm Password' />
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

export default Signup