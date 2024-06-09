import {Image, SafeAreaView, ScrollView, Text, View} from 'react-native';
import {Header} from '../../components/header/Header.tsx';
import React from 'react';
import {styles} from './Post.styles.ts';
import {PostViewProps} from './Post.types.ts';

export const PostView: React.FC<PostViewProps> = ({
  title,
  date,
  content,
  imgSrc,
}) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <Header text={title} />
      <ScrollView style={styles.container}>
        <Image
          source={{
            uri: imgSrc,
          }}
          style={styles.image}
          resizeMode="cover"
        />
        <View style={styles.content}>
          <Text>{date}</Text>
          <Text style={styles.text}>{content}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
