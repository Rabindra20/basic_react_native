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
import { NavigationContainer } from '@react-navigation/native';
import { Dashboard } from './component/dasboard';
import Signup from './component/signup';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { useLoginUserMutation } from './services/apiauth'
import { removeToken } from './services/token';
import { useNavigation } from '@react-navigation/native'

const Stack = createNativeStackNavigator();
function App(){
  // const navigation:any = useNavigation()
  const isDarkMode = useColorScheme() === 'dark';
//   const Logout = async ()=>{
//     // console.warn(val)
//       await removeToken()
//       // navigation.navigate("Login");
//       console.log("Logout")
      

// }
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
      onPress={() => alert('Hi this is test')}
      // onPress={Logout} 
      title="Test"
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
const Signups = (Props: { navigation: { navigate: (arg0: string) => void; }; })=> {
 return (
 <><View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} />
 <Signup></Signup>
 <Button title='Login ' onPress={() => Props.navigation.navigate("Login")} />
 {/* <Button title='Dashboard ' onPress={() => Props.navigation.navigate("Dashboard")} /> */}
 </>
)
}
export default App;
