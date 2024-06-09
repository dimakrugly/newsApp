import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';

interface Props {
  title: string;
  variant: 'red' | 'blue';
  onPress: () => void;
  disabled?: boolean;
}
export const SquareButton: React.FC<Props> = ({
  title,
  variant,
  onPress,
  disabled = false,
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        variant === 'red' ? styles.red : styles.blue,
        disabled && styles.disabled,
      ]}
      onPress={onPress}
      disabled={disabled}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 63,
    borderRadius: 10,
    color: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  red: {
    backgroundColor: '#FF6363',
  },
  blue: {
    backgroundColor: '#456EFE',
  },
  disabled: {
    backgroundColor: 'hsla(227,99%,63%,0.37)',
  },
  text: {
    color: 'white',
    fontSize: 24,
  },
});
