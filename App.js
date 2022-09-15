import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Image, ImageBackground } from 'react-native';
import { View } from 'react-native-web';



export default function App() {


  const [titleText, setTitleText] = useState("HAPPY BIRTHDAY LWANDO MASINGA")
  const [bodyText, setBodyText] = useState("Wishing you all the best young man in this journey of life grow up an take care of momie")
  const [lastText, setLastText] = useState("shobane kamangethe zikalala hobe mbokwane masinga \n omhlephe  ogibela igagasi sgengeh")
  

  return (

    <ImageBackground source={require('./assets/cake_1550.png')} resizeMode='center' style={styles.image}>
        <Text style={styles.titleText}>{titleText}{"\n"}</Text>
       
        <Image
          style={styles.stretch}
          source={require('./assets/lwando.png')}
        />
        
        <Text style={styles.bodyText}>{bodyText}{"\n"}</Text>
        <Text style={styles.lastText}>{lastText}{"\n"}</Text>

        

    </ImageBackground>

    
  );
}
const styles = StyleSheet.create({
  image:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    justifyContent:"center",
  },
  titleText:{
    fontSize:"20px",
    fontWeight:"bold",
    color:"blue",

  },
  bodyText:{

    fontSize:'30px',
    fontWeight:"bold",
    color:"red",
  

  },
  lastText:{
    
    marginTop:'25px',
    fontWeight:"bold",
    color:"blue",
    fontSize:'30px',
  },
  stretch:{
    marginTop:"20px",
    width:400,
    height:300,
    resizeMode:'stretch',
    justifyContent:'flex-start',
    alignSelf:'center',
    paddingBottom:'200',
    marginBottom:'20px',
  },


});


