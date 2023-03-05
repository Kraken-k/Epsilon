import { View, Text, ActivityIndicator, TextInput, SafeAreaView, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'
import TeacherLogin from '../assets/TeacherLogin.svg'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FacbookIcon from '../assets/FacebookIcon.svg'
import GoogleIcon from '../assets/google.svg'
import Twitter from '../assets/twitter.svg'


const LoginforTeacher = ({navigation}) => {



  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center' }}>
      <View style={{ paddingHorizontal: 25 }}>


        <View style={{ alignItems: 'center' , transform:[{rotateY:'0deg'}]  ,}}>
          <TeacherLogin
            height={300}
            widht={300}
            style={{marginBottom:20 }}

          />
        </View>
        <Text style={{
          fontSize: 20,
          fontWeight: '500',
          color: '#333',
          marginBottom: 30,
        }} >
          Login for  <Text style={{color:'#FB607F'}}>Teacher</Text>
        </Text>
        <View style={{
          flexDirection: 'row',

          borderBottomColor: '#ccc',
          borderBottomWidth: 1,
          paddingBottom: 8,
          marginBottom: 25,
          alignItems: 'center',
        }}>
          <MaterialIcons name='alternate-email' size={20} color='#666' style={{ marginRight: 5 }} />
          <TextInput
            placeholder='Email ID'
            style={{ flex: 1, paddingVertical: 0 }}
            keyboardType="email-address" />




        </View>


        <View style={{
          flexDirection: 'row',

          borderBottomColor: '#ccc',
          borderBottomWidth: 1,
          paddingBottom: 8,
          marginBottom: 25,
          alignItems: 'center',
        }}>



          <Ionicons name='ios-lock-closed-outline' size={20} color='#666' style={{ marginRight: 5 }} />
          <TextInput
            placeholder='Password'
            style={{ flex: 1, paddingVertical: 0 }}
            secureTextEntry={true} />
          <TouchableOpacity onPress={() => { }}>
            <Text style={{ color: '#AD40AF', fontWeight: '700' }}>Forget ?</Text>
          </TouchableOpacity>

        </View>

        <TouchableOpacity
          onPress={() => navigation.navigate('HomeforTeacher')}
          style={{
            backgroundColor: '#AD40AF',
            padding: 20,
            borderRadius: 10,
            marginBottom: 30
          }}>
          <Text style={{ textAlign: 'center', fontWeight: '700', fontSize: 16, color: '#fff' }}>Login</Text>
        </TouchableOpacity>

        <Text style={{ textAlign: 'center', color: '#666', marginBottom: 30 }}>or , Login with...</Text>

        <View style={{flexDirection:'row' , justifyContent:'space-between' , marginBottom:30 ,}}>
          <TouchableOpacity
            onPress={() => { }}
            style={{
              boderColor: '#ddd',
              borderWidth: 2,
              borderRadius: 10,
              paddingHorizontal: 30,
              paddingVertical: 10,
            }}>
            <GoogleIcon height={24} width={24}/>

          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => { }}
            style={{
              boderColor: '#ddd',
              borderWidth: 2,
              borderRadius: 10,
              paddingHorizontal: 30,
              paddingVertical: 10,
            }}>
            <FacbookIcon height={24} width={24}/>

          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => { }}
            style={{
              boderColor: '#ddd',
              borderWidth: 2,
              borderRadius: 10,
              paddingHorizontal: 30,
              paddingVertical: 10,
            }}>
            <Twitter height={24} width={24}/>

          </TouchableOpacity>
        </View>
        <View
         style ={{flexDirection:'row' , justifyContent:'center' , marginBottom:30 ,}}>
          <Text>Don't have account ? </Text>
          <TouchableOpacity onPress={() =>navigation.navigate('Form')}>
            <Text style={{color:'#AD40AF' , fontWeight:'700'}}>Register</Text>
          </TouchableOpacity>
         </View>
      </View>
    </SafeAreaView>
  )


}

export default LoginforTeacher