import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Join from '../Screens/Join' 
import LoginforStudent from '../Screens/LoginforStudent';
import LoginforTeacher from '../Screens/LoginforTeacher';
import RegistrationForTeacher from '../Screens/RegistrationForTeacher';
import RegistrationForStudent from '../Screens/RegistrationForStudent'
import HomeForStudent from '../Screens/HomeForStudent';
import HomeForTeacher from '../Screens/HomeForTeacher';
import Chat from '../Screens/Chat';
import Form from '../Screens/Form';
import ProfileforStudent from '../Screens/ProfileforStudent';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BottomTabNavigator from './BottomTabNavigation';
// import InitialScreen from './src/Screens/InitialScreen';
const Stack = createNativeStackNavigator();

     
const Navigation = () => {
    return(
        <NavigationContainer>
      <Stack.Navigator
        // initialRouteName='HomeforStudentBottom'
        screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Join" component={Join} />
        <Stack.Screen name="LoginforStudent" component={LoginforStudent} />
        <Stack.Screen name="LoginforTeacher" component={LoginforTeacher} />
        <Stack.Screen name="RegistrationforTeacher" component={RegistrationForTeacher} />
        <Stack.Screen name="RegistrationforStudent" component={RegistrationForStudent} />
        <Stack.Screen name="Form" component={Form} />
        <Stack.Screen name="Chat" component={Chat} />
        <Stack.Screen name="Profileforstudent" component={ProfileforStudent} />
        <Stack.Screen name="HomeforStudentBottom" component={BottomTabNavigator} options={{headerShown:false}} />
        <Stack.Screen name="HomeforTeacher" component={HomeForTeacher} />
      </Stack.Navigator>
    </NavigationContainer>
    )
}


export default Navigation ;