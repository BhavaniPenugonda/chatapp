
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
import AsyncStorage from "@react-native-async-storage/async-storage";

/* 
 
 * Displays the user's name in the navigation bar and sets the background
 * color of the screen based on the selection made in the Start screen.
 */

const Chat = ({ route,navigation,isConnected }) => {
  const db = route.params.db;
  const [messages, setMessages] = useState([]);
  
  const {userID, userName , backgroundColor } = route.params;

  useEffect(() => {
    let unsubMessages;
    if (isConnected === true) {
      // Unregister current onSnapshot() listener to avoid registering multiple listeners when
      // useEffect code is re-executed.
      if (unsubMessages) unsubMessages();
      unsubMessages = null;

    navigation.setOptions({ title: userName });
    const q = query(collection(db, "messages"), orderBy("createdAt", "desc"));
   unsubMessages = onSnapshot(q, (docs) => {
   let newMessages = [];
   docs.forEach(doc => {
     newMessages.push({
       id: doc.id,
       ...doc.data(),
       createdAt: new Date(doc.data().createdAt.toMillis())
       
     })
   })
   cacheMessages(newMessages);
   setMessages(newMessages);
 });
} else loadCachedMessages();

 return () => {
   if (unsubMessages) unsubMessages();
 }
  }, [db,userName, navigation,isConnected]);

  // Function to cache messages
  const cacheMessages = async (messagesToCache) => {
    try {
      await AsyncStorage.setItem('messages', JSON.stringify(messagesToCache));
    } catch (error) {
      console.log(error.message);
    }
  }

// Function to load cached messages
const loadCachedMessages = async () => {
  const cachedLists = await AsyncStorage.getItem("messages") || [];
  setLists(JSON.parse(cachedLists));
}


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
