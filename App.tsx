import React from 'react';
import {
  Text,
  useColorScheme,
  View,
  Button,
} from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import Bio_data from './component/bio_data';
var lastname="Sah"
function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const midlename= "Raj"
  
  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // };

  return (
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Text style={{fontSize: 30}}>Hi Rabindra {midlename} {lastname}</Text>
          <Text style={{fontSize: 20}}>{lastname==="Sah"?"Above info is correct":"Above info is wrong"}</Text>
          <TEST />
          <Bio_data />
          <Button title='press here' onPress={Onpres}></Button>
          {/* pass parameter in button */}
          <Button title='Click here' onPress={()=>Onpress("hello")} color={"green"}></Button> 
        </View>
  );
}
const TEST=()=>{
return(
  <View>
  <Text style={{fontSize: 20}}>For test another component</Text>
  </View>
)
};
const Onpres=()=>{
  console.warn("Button working Fine")
  };
  {/* For pass parameter in button */}
  const Onpress=(val:string)=>{
    console.warn(val)
    };
export default App;
