import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  safeArea: {flex: 1},
  homeView: {
    paddingHorizontal: 16,
    paddingTop: 30,
    flex: 1,
  },
  topBar: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 10,
    marginBottom: 40,
  },
  noRes: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomSheet: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 50,
    gap: 16,
  },
});
