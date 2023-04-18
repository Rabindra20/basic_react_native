import {
    Text,
    View,
    Button,
    StyleSheet,
    TextInput
} from 'react-native';
import { useState } from 'react';
const Form = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [display, setDisplay] = useState(false);
    return (
        <View>
            <Text style={{ fontSize: 20 }}>Test react form</Text>
            <TextInput style={styles.textinput} placeholder='Enter Your Name' onChangeText={(text) => setName(text)}> </TextInput>
            <TextInput style={styles.textinput} placeholder='Enter Email' onChangeText={(text) => setEmail(text)} > </TextInput>
            <TextInput style={styles.textinput} placeholder='Enter Password' secureTextEntry={true} onChangeText={(text) => setPassword(text)} > </TextInput>
           <View style={{marginBottom:10,marginTop: 15,}}>
            <Button title='Print detail' onPress={()=>setDisplay(true)} />
           </View>
           <Button title='Clear detail' />
           <View>
            {
                display?
                <View>
                    <Text style={{fontSize: 20}}>Username : {name}</Text>
                    <Text style={{fontSize: 20}}>Password : {password}</Text>
                    <Text style={{fontSize: 20}}>Email : {email}</Text>
                </View>
                :null
            }
           </View>
        </View>
    );
};
const styles = StyleSheet.create({
    textinput: {
        marginTop: 32,
        paddingHorizontal: 24,
        fontSize: 24,
        fontWeight: '600',
        color: 'black',
        borderColor: 'blue',
        borderWidth: 2,
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 10
    }
})
export default Form