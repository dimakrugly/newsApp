import {Text, View} from 'react-native';
import {RoundButton} from '../roundButton/RoundButton.tsx';
import {useNavigation} from '@react-navigation/native';
import React, {useCallback} from 'react';
import {HeaderProps} from './Header.types.ts';
import {styles} from './Header.styles.ts';

export const Header: React.FC<HeaderProps> = ({text}) => {
  const navigation = useNavigation();

  const goBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <View style={styles.headerContainer}>
      <RoundButton variant="arrow" onPress={goBack} />
      <Text style={styles.headerText}>{text}</Text>
    </View>
  );
};
