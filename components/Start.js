import { StyleSheet, View, Text,TextInput,ImageBackground,TouchableOpacity } from 'react-native';
import { useState } from 'react';




const Start= ({navigation})=>{
  const [name, setName] = useState('');
  const [color, setColor] = useState('#090C08');
  const colorOptions = [
    '#090C08', // Dark Black
    '#474056', // Dark Purple
    '#8A95A5', // Greyish Blue
    '#B9C6AE'  // Light Greenish
  ];
  return (
    <ImageBackground source={require('./assets/BackgroundImage.png')} resizeMode="cover" style={styles.backgroundImage}>
    <View style={styles.container}>
      
      <Text style={styles.title}>Chat App</Text>
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
              key={optioCcolor}
              style={[styles.colorCircle, { backgroundColor: optionColor }]}
              onPress={() => setColor(optionColor)}
            />
          ))}
      </View>
    
     <TouchableOpacity
           style={styles.button}
           onPress={() => navigation.navigate('Chat',{ name: name,backgroundColor:color})}>
           <Text style={styles.buttonText}>Start Chatting</Text>
      </TouchableOpacity>
    </View>
      </ImageBackground>
)

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
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
    marginTop: 30,
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
