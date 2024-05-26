import {StyleSheet, Text, View} from 'react-native';
import NoRes from '../../assets/images/NoRes.svg';
export const NoResults = () => (
  <View style={styles.noResults}>
    <NoRes width={225} height={210} />
    <Text style={styles.text}>No results found</Text>
  </View>
);

const styles = StyleSheet.create({
  noResults: {
    gap: 30,
    alignItems: 'center',
  },
  text: {
    color: '#A4A9AE',
    fontSize: 16,
  },
});
