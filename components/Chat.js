
import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { GiftedChat } from "react-native-gifted-chat";

const Chat = ({ route,navigation }) => {
  const [messages, setMessages] = useState([]);
  const { name, backgroundColor } = route.params;

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: "Hello developer",
        createdAt: new Date(),
        user: {
          _id: 2,
          name: "React Native",
          avatar: "https://placeimg.com/140/140/any",
        },
      },
    ]);
  }, []);
  // Set the navigation title dynamically based on the name
  useEffect(() => {
    navigation.setOptions({ title: name });
  }, [name, navigation]);

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Text style={styles.greeting}>Hello, {name}!</Text>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 24,
    color: '#fff',
  },
  greeting: {
    fontSize: 24,
    fontWeight: '600',  // Adds a bolder font weight for the name
    color: '#fff',  // Ensures text is white regardless of background color
  },
});

export default Chat;
