import {
    Text,
    View,
    Button
  } from 'react-native';
  import { useState } from 'react';
const Usestate=()=>{
    const [name, setName] = useState("check");
    function test(){
        setName("state")
    }
    return (
        <View>
          <Text style={{fontSize: 20}}>{name}</Text>
          <Button title='check state' onPress={test} />
        </View>
  );
}
export default Usestate