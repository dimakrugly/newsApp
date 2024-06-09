import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import useTime from '../../hooks/useTime.ts';
import {Article} from '../../types/Article.ts';
import React from 'react';

interface Props {
  article: Article;
  id: any;
  onPress: () => void;
  onLongPress: () => void;
}
export const ListItem: React.FC<Props> = ({article, onPress, onLongPress}) => {
  const {timeAgo} = useTime(article.date);
  //TODO typize

  return (
    <TouchableOpacity
      style={styles.listItem}
      onPress={onPress}
      onLongPress={onLongPress}>
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
