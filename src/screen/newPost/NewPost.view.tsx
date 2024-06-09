import {SafeAreaView, TextInput, View} from 'react-native';
import {styles} from './NewPost.styles.ts';
import {Header} from '../../components/header/Header.tsx';
import {SquareButton} from '../../components/squareButton/SquareButton.tsx';
import React from 'react';
import {NewPostProps} from './NewPost.types.ts';

export const NewPostView: React.FC<NewPostProps> = ({
  title,
  imageURL,
  link,
  content,
  setTitle,
  setImageURL,
  setLink,
  setContent,
  isValid,
  addNewArticle,
}) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <Header text="New Post" />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Title*"
          value={title}
          onChangeText={text => setTitle(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Image URL"
          value={imageURL}
          onChangeText={text => setImageURL(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Link"
          value={link}
          onChangeText={text => setLink(text)}
        />
        <TextInput
          style={[styles.input, styles.textArea]}
          multiline={true}
          numberOfLines={4}
          scrollEnabled={true}
          placeholder="Message"
          value={content}
          onChangeText={text => setContent(text)}
        />
      </View>
      <View style={styles.buttonContainer}>
        <SquareButton
          title="Public"
          variant="blue"
          onPress={addNewArticle}
          disabled={!isValid}
        />
      </View>
    </SafeAreaView>
  );
};
