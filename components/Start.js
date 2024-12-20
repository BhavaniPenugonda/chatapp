import { StyleSheet, View, Text,TextInput,ImageBackground,TouchableOpacity,Alert } from 'react-native';
import { useState } from 'react';
import { getAuth, signInAnonymously } from "firebase/auth";




const Start= ({navigation})=>{
  const auth = getAuth();

  const [name, setName] = useState('');
  const [color, setColor] = useState('#090C08');
  const colorOptions = [
    '#090C08', // Dark Black
    '#474056', // Dark Purple
    '#8A95A5', // Greyish Blue
    '#B9C6AE'  // Light Greenish
  ];


// Function to handle anonymous sign-in
const signInUser = () => {
  signInAnonymously(auth)
    .then(result => {
      // Navigate to the 'Chat' screen with user ID, name, and background color
      navigation.navigate('Chat', {
        userID: result.user.uid,  // User's UID
        userName: name,           // User's name from the input
        backgroundColor: color,  // Background color selected
      });
      Alert.alert("Signed in Successfully!");
    })
    .catch((error) => {
      Alert.alert("Unable to sign in, try again later.");
    });
};

  return (
  <View style={styles.container}>
    <ImageBackground source={require('../assets/BackgroundImage.png')} resizeMode="cover" style={styles.backgroundImage}>
    
      
      <Text style={styles.title}>Chat App</Text>
      <View style={styles.box}>
       <TextInput
        style={styles.textInput}
        value={name}
        onChangeText={setName}
        placeholder='Your Name'
        placeholderTextColor="#757083"  // Placeholder text color
       />
       <Text style={styles.chooseBgColor}>Choose Background Color</Text>
       <View style={styles.colorContainer}>
          {colorOptions.map((optionColor) => (
            <TouchableOpacity
              key={optionColor}
              style={[styles.colorCircle, { backgroundColor: optionColor }]}
              onPress={() => setColor(optionColor)}
            />
          ))}
        </View>
    
        <TouchableOpacity
           style={styles.button}
           onPress={signInUser}>
           <Text style={styles.buttonText}>Start Chatting</Text>
        </TouchableOpacity>
       </View> 
    </ImageBackground>
  </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    
  },
  box: {
    
    backgroundColor: '#FFFFFF',
    borderRadius: 4,
    width: '88%',
    height: '50%', 
    alignItems: 'center',
    justifyContent: 'space-around', 
    padding:20,
    marginBottom: 10,
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
    opacity: 0.5,
    borderRadius: 5,
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
    color :'#FFFFFF',
    marginBottom: 50,
  },
  button: {
    backgroundColor: '#757083',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginBottom: 20,
  },
  buttonText:{
    fontSize :16, 
    fontWeight :600, 
    color: '#FFFFFF', 
  },
  colorContainer: {
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'space-between',
    width: '100%',
  },
  colorCircle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    margin: 5,
  },
  chooseBgColor: {
    fontSize: 16,
    fontWeight: '300',
    color: '#757083',
    opacity: 1,  // Corrected opacity to 1 for full visibility
    marginTop: 10,
  },
 });
 

 export default Start;
