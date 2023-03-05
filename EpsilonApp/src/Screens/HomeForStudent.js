import { View, Text, StyleSheet, Image, FlatList, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import SearchBar from '../components/Searchbar'

import axios from 'axios'
import { removeToken } from '../services/Asyncstorage'




const HomeForStudent = () => {
  const [data, setData] = useState([]);
  const [ photoUrl , setPhotoUrl] = useState('') ;



  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('http://10.0.2.2:8000/Teacher/id/get');
      setData(result.data);
      
      setPhotoUrl(result.data.Photo);
    };
    fetchData();
  }, []);


 


  const handleLogout = () => {
    removeToken()
  }


  // const HomeImg = '../src/assets/homeforstudentImg.jpg'
  return (
    <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#FFFFFF' }}>


      <View style={{ flex: 1, alignItems: 'center', marginTop: 40 }}>
        <Text style={styles.studentHomeHead}>Hey Rohan , </Text>
        <Text style={styles.studentHomeHead2}>Which tutor do you want to select ?</Text>
        <SearchBar/>
       
       

        <View style={{
          border: 2, marginTop: 35, padding: 80,
          margin: 20,
          //  flex:1 ,
          flexDirection: 'row',
          alignItems: 'stretch',
          backgroundColor: '#ccffcc',
          justifyContent: 'space-around',

          width: 350,
          height: 200,

          borderColor: "pink",
          borderRadius: 50,
        }}>

          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', }}>
            <Image source={require('../assets/homepageimg.png')} style={{ height: 150, width: 100, }} />

            <Text style={{ fontSize: 25, color: 'black', marginRight: 50, width: 200, height: 150, marginLeft: 30, marginTop: 20, fontFamily: 'Poppins-Medium' }}>Connect with your favourite Teachers . </Text>

          </View>




        </View>

        <Text style={{ marginRight: 120, color: 'green', fontFamily: 'Poppins-Medium', fontWeight: '400' }}>Recommended Teachers    </Text>


        {/* FlatList */}
        <ScrollView>

        
        <View style={styles.container}>
        
          {data.map((item ) => (
            
            <View key={item.T_id} style={styles.item}>
            
              <Text style={styles.title}>{item.Name}</Text>
              <Text style={styles.expertin}>{item.Expert_IN}</Text>
              <Text style={styles.description}>{item.Review}</Text>
              <Text style={styles.description}>{item.Payment}</Text>
           
              <Image source={{ uri: "https://t3.ftcdn.net/jpg/02/65/18/30/360_F_265183061_NkulfPZgRxbNg3rvYSNGGwi0iD7qbmOp.jpg" }} style={styles.img} />
       </View>
            
          ))}
        </View>

        

        </ScrollView>

       



      







      </View>





    </View>


  )
}

const styles = StyleSheet.create({
  studentHomeHead: {
    fontSize: 30,
    fontWeight: '400',
    marginBottom: 10,
    color: '#404040',
    fontFamily: 'Poppins-Black'



  },

  studentHomeHead2: {
    fontSize: 18,
    color: '#888888',
    fontWeight: '600',
    fontFamily: 'Poppins-Light',
    marginBottom: 10,




  },


  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    padding: 20,
  },
  card: {
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    elevation: 2,
    backgroundColor: '#FFF',
    marginBottom: 20,
    borderRadius: 10,
    
    overflow: 'hidden',
    flexDirection: 'row',
  },
  cardImage: {
    width: 100,
    height: 100,
  },
  cardTextContainer: {
    padding: 20,
    flex: 1,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  cardDescription: {
    fontSize: 16,
    color: '#333',
    marginTop: 10,
  },




  container: {
    flex: 1,
    width:350 ,
    borderRadius:20 ,
    backgroundColor: '#fff',
    padding: 16,
  },
  item: {
    alignItems:'center',
    justifyContent:'center',
    elevation:8 ,
    flexDirection:'column',
    
    backgroundColor: '#ffffff',
    borderRadius:10 ,
    padding: 20,
    marginVertical: 8,
  },
  title: {
    fontSize: 15,
    fontWeight:'700',
    color:'black',
    marginLeft:180 ,
  },
  description: {
    fontSize: 16,
    marginLeft:180 ,
  },

  expertin : {
marginLeft:180
  },

  img:{
   
    borderWidth:3,
    color:'black',
    borderColor:'black',
    borderRadius:20 ,
    height:100 ,
    width:100 ,
    marginTop:-100 ,
    marginRight:200 ,
  }
});


export default HomeForStudent