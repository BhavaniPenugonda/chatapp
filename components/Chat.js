
import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Chat = ({ route,navigation }) => {
  const { name, backgroundColor } = route.params;
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
