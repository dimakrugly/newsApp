import {StyleSheet, Text, View} from 'react-native';
import {RoundButton} from '../roundButton/RoundButton.tsx';
import {useNavigation} from '@react-navigation/native';
import React, {useCallback} from 'react';

interface HeaderProps {
  text: string;
}
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

const styles = StyleSheet.create({
  headerContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 22,
    height: 90,
    gap: 5,
  },
  headerText: {
    fontSize: 20,
    flex: 1,
    textAlign: 'center',
  },
});
