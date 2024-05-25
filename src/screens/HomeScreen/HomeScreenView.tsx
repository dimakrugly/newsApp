import React from 'react';
import {View, StyleSheet, TextInput} from 'react-native';

export const HomeScreenView = () => (
  <View style={styles.homeScreen}>
    <TextInput placeholder="Search" style={styles.input} />
  </View>
);

const styles = StyleSheet.create({
  homeScreen: {
    paddingHorizontal: 30,
    paddingTop: 30,
    backgroundColor: '#FFFFFF',
    height: '100%',
  },
  input: {
    backgroundColor: 'rgba(164, 169, 174, 0.15)',
    borderRadius: 10,
  },
});
