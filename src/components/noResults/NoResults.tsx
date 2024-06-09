import {Text, View} from 'react-native';
import NoRes from '../../assets/images/NoRes.svg';
import {styles} from './NoResults.styles.ts';
export const NoResults = () => (
  <View style={styles.noResults}>
    <NoRes width={225} height={210} />
    <Text style={styles.text}>No results found</Text>
  </View>
);
