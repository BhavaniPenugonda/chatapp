import { StyleSheet, View, Text, Button,TextInput,ImageBackground } from 'react-native';
import { useState } from 'react';




const Start= ({navigation})=>{
  const [name, setName] = useState('');
  return (

    <View style={styles.container}>
      <ImageBackground source={require('./assets/BackgroundImage.png')} resizeMode="cover" style={styles.backgroundImage}></ImageBackground>
      <Text style={styles.title}>ChatApp</Text>
      <TextInput
        style={styles.textInput}
        value={name}
        onChangeText={setName}
        placeholder='Your Name'
      />
      <Button
       title="Start Chatting"
       onPress={() => navigation.navigate('Chat',{ name: name})}
     />
      </View>
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textInput: {
    width: "88%",
    padding: 15,
    borderWidth: 1,
    marginTop: 15,
    marginBottom: 15,
    color: '#757083',
    fontSize: 16, 
    fontWeight: '300', 
    opacity: 50,
  },
  backgroundImage: {
    flex: 1,  
    alignItems: 'center',
    justifyContent: 'center', 
    height: '100%',
    width: '100%',
  },
  title:{
    fontSize :45, 
    fontWeight :600, 
    fontColor :'#FFFFFF'
  }
 });
 

 export default Start;
