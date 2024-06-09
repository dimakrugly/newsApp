import {Image, Text, TouchableOpacity, View} from 'react-native';
import useTime from '../../hooks/useTime.ts';
import React from 'react';
import {ListItemProps} from './ListItem.types.ts';
import {styles} from './ListItem.styles.ts';

export const ListItem: React.FC<ListItemProps> = ({
  article,
  onPress,
  onLongPress,
}) => {
  const {timeAgo} = useTime(article.date);

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
