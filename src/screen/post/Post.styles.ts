import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  safeArea: {flex: 1, backgroundColor: 'white'},
  container: {
    flex: 1,
  },
  image: {
    height: 270,
  },
  content: {
    flex: 1,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    top: -20,
    paddingHorizontal: 20,
    paddingTop: 20,
    gap: 10,
    backgroundColor: 'white',
  },
  text: {
    fontSize: 16,
  },
});
