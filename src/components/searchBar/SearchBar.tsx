import {StyleSheet, TextInput, View} from 'react-native';
import SearchLogo from '../../assets/icons/Search.svg';

export const SearchBar = () => (
  <View style={styles.searchBar}>
    <SearchLogo width={24} height={24} />
    <TextInput placeholder="Search" />
  </View>
);

const styles = StyleSheet.create({
  searchBar: {
      height: 48,
      backgroundColor: 'rgba(164, 169, 174, 0.15)',
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 8,
      borderRadius: 8,
  },
});
