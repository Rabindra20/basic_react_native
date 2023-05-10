
import React from 'react';
import { Button, Text, View, } from 'react-native';
class Student extends React.Component {
    test=()=>{
        console.warn("test");
    }
   render() {
       return (
           <View>
             <Text>React Native Class Component</Text>
             <Button title=" click on " onPress={this.test} />
           </View>
       )
   }
 }
export default Student;