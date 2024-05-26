import {StyleSheet, View} from 'react-native';
import {SearchBar} from "../../components/searchBar/SearchBar.tsx";

export const HomeView = () => (
  <View style={styles.homeView}>
    <SearchBar />
  </View>
);

const styles = StyleSheet.create({
  homeView: {
    paddingHorizontal: 30,
    paddingTop: 30,
  },
});
