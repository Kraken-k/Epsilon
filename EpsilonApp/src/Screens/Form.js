import React, { useState } from 'react';
import { View, TextInput, Text, Button,SafeAreaView,ScrollView,StatusBar,TouchableOpacity } from 'react-native';
import { style } from 'deprecated-react-native-prop-types/DeprecatedViewPropTypes';
import DocumentPicker from 'react-native-document-picker';
import HomeForTeacher from './HomeForTeacher';

 
const Form = ({ navigation }) => {
  const [Name, setName] = useState('');
  const [Email, setEmail] = useState('');
  const [Gender, setGender] = useState('');
  const [Experience, setExperience] = useState('');
  const [Date_of_Birth, setDate_of_Birth] = useState('');
  const [Addrese, setAddress] = useState('');
  const [Expert_IN, setExpert_IN] = useState('');
  const [Payment, setPayment] = useState('');
  const [certificate, setCertificate] = useState(null);
  const [Goverment_id, setGoverment_id] = useState(null);
  const [Signature, setSignature] = useState(null);
  const [Photo, setPhoto] = useState(null);

  const handleNameChange = (text) => {
    setName(text);
  };

  const handleEmailChange = (text) => {
    setEmail(text);
  };

  const handleSubmit = () => {
    try {
      console.log(certificate)
     } 
    catch (error) {
      console.log(error);
    }
  };
  
  
  const pickDocument =  (field) => {
    try {
      const result =  DocumentPicker.pick({
        type: [DocumentPicker.types.pdf, DocumentPicker.types.images, DocumentPicker.types.doc]

         });
      const file = {
        uri: result.uri,
        type: result.type,
        name: result.name,
      };
      
      switch (field) {
        case 1:
          setCertificate(file);
          break;
        case 2:
          setGoverment_id(file);
          break;
        case 3:
          setSignature(file);
          break;
        case 4:
          setPhoto(file);
          break;
        default:
          break;
      }
    } catch (err) {
      console.log(err);
    }
  };
    

  return (
    <SafeAreaView style={{ padding: 20 ,flex: 1 
    }}>

    <ScrollView > 
    <Text style={{
          fontSize: 20,
          fontWeight: '500',
          color: '#333',
          marginBottom: 30,
        }} >
          Registeration for  <Text style={{ color: '#FB607F' }}>Teacher</Text>
        </Text>
    
     
       
      <TextInput
        placeholder="Enter your name"
        value={Name}
        onChangeText={handleNameChange}
        style={{ borderBottomWidth:1,paddingTop:30}}/>
      
       
      <TextInput
        placeholder="Enter your email"
        value={Email}
        onChangeText={handleEmailChange}
        keyboardType="email-address"
        style={{ borderBottomWidth:1,paddingTop:20}}
      />
       
      <TextInput
        placeholder="Enter your gender"
        value={Gender}
        onChangeText={setGender}
        style={{ borderBottomWidth:1,paddingTop:20}}
      />
       
      <TextInput
        placeholder="Enter your experience"
        value={Experience}
        onChangeText={setExperience}
        style={{ borderBottomWidth:1,paddingTop:20}}
      />
       
      <TextInput
        placeholder="Enter your date of birth"
        value={Date_of_Birth}
        onChangeText={setDate_of_Birth}
        style={{ borderBottomWidth:1,paddingTop:20}}
      />
       
      <TextInput
        placeholder="Enter your address"
        value={Addrese}
        onChangeText={setAddress}
        style={{ borderBottomWidth:1,paddingTop:20}}
      />
       
      <TextInput
        placeholder="Enter your expertise"
        value={Expert_IN}
        onChangeText={setExpert_IN}
        style={{ borderBottomWidth:1,paddingTop:20}}
      />

 
      <Text style={{ paddingTop:50}}> certificate</Text>
      <Button title="Choose File" onPress={pickDocument}>
        {certificate ? certificate.name : 'Choose File'}
      </Button>
      <Text style={{ paddingTop:30}}>Government_id</Text>
      <Button title="Choose File" onPress={pickDocument}>
        {Goverment_id ? Goverment_id.name : 'Choose File'}
      </Button>
      <Text style={{ paddingTop:30}}>Signature</Text>
      <Button title="Choose File" onPress={pickDocument}>
        {Signature ? Signature.name : 'Choose File'}
      </Button>
      <Text style={{ paddingTop:30}}>Photo</Text>
      <Button title="Choose File" onPress={pickDocument} style={{ width: '70%',
    paddingVertical: 0,
    backgroundColor: '#7986cb',
    borderRadius: 5,
    marginTop: 30,
    alignItems: 'center',}}>
        {Photo ? Photo.name : 'Choose File'}
      </Button>

      <TextInput
        placeholder="Enter Your Desired Payment"
        value={Payment}
        onChangeText={setPayment}
        style={{ borderBottomWidth:1,paddingTop:20}}
      />

      <TouchableOpacity
          onPress={handleSubmit}
          style={{
            backgroundColor: '#AD40AF',
            padding: 20,
            borderRadius: 10,
            marginBottom: 30
            ,paddingTop:20
          }} >
          <Text style={{ textAlign: 'center', fontWeight: '700', fontSize: 16, color: '#fff' }} onPress={() => navigation.navigate('Form')}>Submit</Text>
        </TouchableOpacity>
 
    </ScrollView>

      </SafeAreaView>
  );
};

 
export default Form;