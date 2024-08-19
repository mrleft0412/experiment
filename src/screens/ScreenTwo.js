// src/screens/ScreenTwo.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Cards_Screen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is for cards!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  text: {
    fontSize: 26,
    marginBottom: 20,
  },
});

export default Cards_Screen;
