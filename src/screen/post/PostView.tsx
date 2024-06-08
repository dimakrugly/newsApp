import {Image, SafeAreaView, StyleSheet, Text} from 'react-native';
import {Header} from '../../components/header/Header.tsx';
import React from 'react';

interface PostViewProps {
  title: string;
  date: number | string;
  content: string;
  imgSrc: string;
}
export const PostView: React.FC<PostViewProps> = ({
  title,
  date,
  content,
  imgSrc,
}) => {
  return (
    <SafeAreaView>
      <Header text={title} />
      <Image
        source={{
          uri: imgSrc,
        }}
        style={styles.image}
        resizeMode="cover"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 270,
  },
});
