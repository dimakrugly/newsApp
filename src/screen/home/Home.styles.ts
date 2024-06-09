import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  safeArea: {flex: 1},
  homeView: {
    paddingHorizontal: 16,
    flex: 1,
  },
  topBar: {
    marginTop: 16,
    alignItems: 'center',
    flexDirection: 'row',
    gap: 10,
    marginBottom: 40,
    paddingHorizontal: 16,
  },
  noRes: {
    flex: 1,
    top: '50%',
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

export const bottomSheetCustomStyles = {
  wrapper: {
    backgroundColor: 'rgba(0,0,0,0.33)',
  },
  container: {
    borderRadius: 25,
  },
};
