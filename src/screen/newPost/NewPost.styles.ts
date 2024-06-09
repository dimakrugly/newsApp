import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  inputContainer: {
    flex: 1,
    gap: 25,
    paddingHorizontal: 16,
  },
  input: {
    minHeight: 60,
    backgroundColor: 'hsla(210, 6%, 66%, 0.15)',
    borderRadius: 10,
    paddingHorizontal: 30,
  },
  textArea: {
    height: 180,
    textAlignVertical: 'top',
    paddingTop: 16,
  },
  buttonContainer: {
    paddingHorizontal: 16,
  },
});
