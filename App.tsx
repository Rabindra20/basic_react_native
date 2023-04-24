import React from 'react';
import {
  Text,
  useColorScheme,
  View,
  Button,
  TextInput,
  StyleSheet,
} from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';
// import Bio_data from './component/bio_data';
// import Usestate from './component/usestate';
// import Props from './component/props';
// import Stylesheet from './component/stylesheet';
// import Form from './component/form';
// import Buttonstyle from './component/button';
import Login from './component/login';
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider } from "react-redux";
import { NavigationContainer } from '@react-navigation/native';
import { Dashboard } from './component/dasboard';
import Signup from './component/signup';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useLoginUserMutation } from '../basic_react_native/services/apiauth'
import { removeToken } from '../basic_react_native/services/token';
import { useNavigation } from '@react-navigation/native'

const Stack = createNativeStackNavigator();
function App(){
  const isDarkMode = useColorScheme() === 'dark';
  const Logout = async ()=>{
      await removeToken()
      // navigation.navigate('Home');
      console.log("Logout")

}
  return (
        // <View
        //   style={{
        //     backgroundColor: isDarkMode ? Colors.black : Colors.white,
        //   }}>
            
        //   {/* <TEST /> */}

        //   {/* Implement folder wise component */}
        //   {/* <Bio_data /> */}

        //   {/* Implement button component */}
        //   {/* <Buttonstyle /> */}

        //   {/* implement state */}
        //   {/* <Usestate />  */}

        //   {/* Implement props */}
        //   {/* <Props /> */}

        //   {/* Implement style */}
        //   {/* <Stylesheet /> */}
          
        //   {/* Implement form */}
        //   {/* <Form /> */}

        //   {/* Implement array and list */}

        //   {/* <Login /> */}

      <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: 'purple' }, headerTintColor: 'white' }}>
       <Stack.Screen name="Signup" component={Signups} options={{ title: 'Registration', headerBackVisible: false }}  />
       <Stack.Screen name="Login" component={Login} options={{ title: 'Login', headerBackVisible: true }}  />
      <Stack.Screen name="Dashboard" component={Dashboard} options={{ title: 'Dashboard', headerBackVisible: true ,
  headerRight: () => (
    <Button
      onPress={(Logout) => alert('sucessfully Logout')}
      title="Logout"
      color="#000"
    />),}} />
      </Stack.Navigator>
    </NavigationContainer>
      //  {/* <Signup /> */}
        //  </View>
  );
};

//   export const Dashboardp= () => {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Dashboard></Dashboard>
//       {/* <Text>gg</Text> */}
//     </View>
//   )
// }
const Signups = (Props)=> {
 return (
 <><View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} /><Signup></Signup><Button title='Login ' onPress={() => Props.navigation.navigate("Login")} /><Button title='Dashboard ' onPress={() => Props.navigation.navigate("Dashboard")} /></>
)
}
export default App;
