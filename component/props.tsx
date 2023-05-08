import {
    Text,
    View,
    Button
  } from 'react-native';
  import { useState } from 'react';
  const Props=()=>{
    const [name, setName] = useState("check");
    return (
        <View>
          <Text style={{fontSize: 20}}>test Props</Text>
          <Button title='check state' onPress={()=>setName("state")} />
          <Test name={name} age={20} />
        </View>
  );
};
const Test=(props:any)=>{
return (
    <View>
    <Text style={{fontSize: 20}}>Name: {p rops.name}</Text>
    <Text style={{fontSize: 20}}>Age : {props.age}</Text>
  </View>
)
}

export default Props