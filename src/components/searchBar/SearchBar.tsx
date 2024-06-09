import {StyleSheet, TextInput, View} from 'react-native';
import SearchLogo from '../../assets/icons/Search.svg';
import React from 'react';
import {SearchBarProps} from './SearchBar.types.ts';
import {styles} from './SearchBar.styles.ts';

export const SearchBar: React.FC<SearchBarProps> = ({value, onChangeText}) => (
  <View style={styles.searchBar}>
    <SearchLogo width={24} height={24} />
    <TextInput
      placeholder="Search"
      style={styles.input}
      value={value}
      onChangeText={text => onChangeText(text)}
    />
  </View>
);
