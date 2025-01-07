
import React, { useEffect,useState } from 'react';
import { View,  StyleSheet, KeyboardAvoidingView,Platform} from 'react-native';
import { GiftedChat ,Bubble} from "react-native-gifted-chat";
import {
  onSnapshot,
  query,
  orderBy,
  collection,
  addDoc,
} from "firebase/firestore";

/* 
 
 * Displays the user's name in the navigation bar and sets the background
 * color of the screen based on the selection made in the Start screen.
 */

const Chat = ({ route,navigation,isConnected }) => {
  const db = route.params.db;
  const [messages, setMessages] = useState([]);
  
  const {userID, userName , backgroundColor } = route.params;

  useEffect(() => {
    navigation.setOptions({ title: userName });
    const q = query(collection(db, "messages"), orderBy("createdAt", "desc"));
 const unsubMessages = onSnapshot(q, (docs) => {
   let newMessages = [];
   docs.forEach(doc => {
     newMessages.push({
       id: doc.id,
       ...doc.data(),
       createdAt: new Date(doc.data().createdAt.toMillis())
       
     })
   })
   setMessages(newMessages);
 })

 return () => {
   if (unsubMessages) unsubMessages();
 }
  }, [db,userName, navigation]);

// Function to handle sending new messages
const onSend = (newMessages) => {
  // Add the first message from the newMessages array to the Firestore "messages" collection
  addDoc(collection(db, "messages"), newMessages[0]);
};

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
   
  // Function to load cached messages
  const loadCachedLists = async () => {
    const cachedLists = await AsyncStorage.getItem("messages") || [];
    setLists(JSON.parse(cachedLists));
  }


  return (
    <View style={[styles.container, { backgroundColor }]}>
      {/* GiftedChat component renders the chat UI */}
    <GiftedChat
      messages={messages}
      renderBubble={renderBubble}
      onSend={messages => onSend(messages)}
      user={{
        _id: userID,  // Pass the userId from route.params
        name: userName,  // Pass the userName from route.params
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
