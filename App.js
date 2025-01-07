import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Chat from "./components/Chat";
import Start from "./components/Start";
import { initializeApp } from "firebase/app";
import { getFirestore, disableNetwork, enableNetwork} from "firebase/firestore";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useNetInfo } from "@react-native-community/netinfo";
import { useEffect } from "react";
import { LogBox,Alert } from "react-native";


LogBox.ignoreLogs(["AsyncStorage has been extracted from"]);

// Create the navigator
const Stack = createNativeStackNavigator();
const App=()=> {
  const connectionStatus = useNetInfo();

  useEffect(() => {
    if (connectionStatus.isConnected === false) {
      Alert.alert("Connection Lost!");
      disableNetwork(db);
    } else if (connectionStatus.isConnected === true) {
      enableNetwork(db);
    }
  }, [connectionStatus.isConnected]);

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
        <Stack.Screen name="Chat"  component={Chat} 
          isConnected={connectionStatus.isConnected}
          initialParams={{ db }}  // Pass db as initialParams

        />
        
          
  
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;
