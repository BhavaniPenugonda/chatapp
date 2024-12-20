import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Chat from "./components/Chat";
import Start from "./components/Start";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Create the navigator
const Stack = createNativeStackNavigator();
const App=()=> {
  //  web app Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-KMEoV4hGIclNkdx3ZPvjDe3nZegi0xg",
  authDomain: "chatapp-47886.firebaseapp.com",
  projectId: "chatapp-47886",
  storageBucket: "chatapp-47886.firebasestorage.app",
  messagingSenderId: "4525910756",
  appId: "1:4525910756:web:db6904f26a7a5521f7daf1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
  const db = getFirestore(app);

  
  return (
  
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Start">
        <Stack.Screen name="Start" component={Start} />
        <Stack.Screen name="Chat" component={Chat}>
          
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;
