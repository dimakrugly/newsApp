import React from 'react';
import {TouchableOpacity} from 'react-native';
import Plus from '../../assets/icons/Plus.svg';
import Arrow from '../../assets/icons/Arrow.svg';
import {RoundButtonProps} from './RoundButton.types.ts';
import {styles} from './RoundButton.styles.ts';

export const RoundButton: React.FC<RoundButtonProps> = ({variant, onPress}) => {
  return (
    <TouchableOpacity style={styles.roundButton} onPress={onPress}>
      {variant === 'plus' && <Plus width={30} height={30} />}
      {variant === 'arrow' && <Arrow width={30} height={30} />}
    </TouchableOpacity>
  );
};
