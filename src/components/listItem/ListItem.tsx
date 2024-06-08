import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import useTimeAgo from '../../hooks/useTimeAgo.ts';
import {Article} from '../../types/Article.ts';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

interface Props {
  article: Article;
  //TODO id => id useRoute
  id: any;
}
export const ListItem: React.FC<Props> = ({article, id}) => {
  const timeAgo = useTimeAgo(article.date);
  //TODO typize
  const navigation = useNavigation<any>();

  return (
    <TouchableOpacity
      style={styles.listItem}
      onPress={() => navigation.navigate('Post', {id: id})}>
      <Image
        source={{
          uri: article.imgSrc,
        }}
        style={styles.image}
      />
      <View style={styles.textContainer}>
        <Text style={styles.title} numberOfLines={1}>
          {article.title}
        </Text>
        <Text style={styles.content} numberOfLines={1}>
          {article.content}
        </Text>
        <Text style={styles.time}>{timeAgo}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    height: 304,
    gap: 18,
  },
  image: {
    height: 195,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  textContainer: {
    paddingHorizontal: 18,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
  },
  content: {
    fontSize: 16,
    fontWeight: '300',
    marginTop: 10,
  },
  time: {
    fontSize: 12,
    fontWeight: '200',
    marginTop: 5,
    color: '#8E949A',
  },
});
