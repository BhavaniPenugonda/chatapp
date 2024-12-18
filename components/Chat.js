
import React, { useEffect } from 'react';
import { View, Text, StyleSheet, KeyboardAvoidingView,Platform} from 'react-native';
import { GiftedChat } from "react-native-gifted-chat";

const Chat = ({ route,navigation }) => {
  const [messages, setMessages] = useState([]);
  const onSend = (newMessages) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, newMessages))
  }
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
      {
        _id: 2,
        text: 'This is a system message',
        createdAt: new Date(),
        system: true,
      },
    ]);
  }, []);
  // Set the navigation title dynamically based on the name
  useEffect(() => {
    navigation.setOptions({ title: name });
  }, [name, navigation]);


  return (
    <View style={[styles.container, { backgroundColor }]}>
    <GiftedChat
      messages={messages}
      onSend={messages => onSend(messages)}
      user={{
        _id: 1
      }}
    />
    { Platform.OS === 'android' ? <KeyboardAvoidingView behavior="height" /> : null }
    {Platform.OS === "ios"?<KeyboardAvoidingView behavior="padding" />: null}
    </View>
  )
  
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  
});

export default Chat;
