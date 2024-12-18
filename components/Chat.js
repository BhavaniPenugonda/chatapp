
import React, { useEffect,useState } from 'react';
import { View,  StyleSheet, KeyboardAvoidingView,Platform} from 'react-native';
import { GiftedChat ,Bubble} from "react-native-gifted-chat";

/* 
 
 * Displays the user's name in the navigation bar and sets the background
 * color of the screen based on the selection made in the Start screen.
 */

const Chat = ({ route,navigation }) => {
  const [messages, setMessages] = useState([]);
  
  const { name, backgroundColor } = route.params;

  useEffect(() => {
    navigation.setOptions({ title: name });
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
        text: 'You have entered the chat',
        createdAt: new Date(),
        system: true,
      },
    ]);
  }, [name, navigation]);

// Function to handle sending new messages
  const onSend = (newMessages) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, newMessages))
  }

// Custom bubble rendering function to style the message bubbles
  const renderBubble = (props) => {
    return <Bubble
      {...props}
      wrapperStyle={{
        right: {
          backgroundColor: "#000"
        },
        left: {
          backgroundColor: "#FFF"
        }
      }}
    />
  }


  return (
    <View style={[styles.container, { backgroundColor }]}>
      {/* GiftedChat component renders the chat UI */}
    <GiftedChat
      messages={messages}
      renderBubble={renderBubble}
      onSend={messages => onSend(messages)}
      user={{
        _id: 1
      }}
    />
    {/* Conditional rendering for KeyboardAvoidingView */}
    { Platform.OS === 'android' ? <KeyboardAvoidingView behavior="height" /> : null }
    {Platform.OS === "ios"?<KeyboardAvoidingView behavior="padding" />: null}
    </View>
  )
  
};

// Styles for the Chat screen
const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  
});

export default Chat;
