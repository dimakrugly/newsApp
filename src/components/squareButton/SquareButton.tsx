import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {SquareButtonProps} from './SquareButton.types.ts';
import {styles} from './SquareButton.styles.ts';

export const SquareButton: React.FC<SquareButtonProps> = ({
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
