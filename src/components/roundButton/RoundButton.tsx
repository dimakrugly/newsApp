import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import Plus from '../../assets/icons/Plus.svg';
import Arrow from '../../assets/icons/Arrow.svg';


interface Props {
  variant: 'plus' | 'arrow';
}

export const RoundButton: React.FC<Props> = ({variant}) => (
  <TouchableOpacity style={styles.roundButton}>
    {variant === 'plus' && <Plus width={30} height={30} />}
    {variant === 'arrow' && <Arrow width={30} height={30} />}
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  roundButton: {
    width: 47,
    height: 47,
    borderRadius: 25,
    backgroundColor: 'hsla(210, 6%, 66%, 0.25)',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
