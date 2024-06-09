import {useCallback, useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from '../../../store/hooks/redux.ts';
import {addPost} from '../../../store/actionCreators/ActionCreator.ts';
import {useNavigation} from '@react-navigation/native';
import {NewPostScreenNavigationProp} from '../NewPost.types.ts';

export const useNewPost = () => {
  const [title, setTitle] = useState('');
  const [imageURL, setImageURL] = useState('');
  const [link, setLink] = useState('');
  const [content, setContent] = useState('');
  const [isValid, setIsValid] = useState(false);

  const dispatch = useAppDispatch();

  const {news} = useAppSelector(state => state.newsReducer);

  const navigation = useNavigation<NewPostScreenNavigationProp>();

  useEffect(() => {
    if (title.trim() && content.trim()) {
      setIsValid(true);
    }
  }, [content, title]);

  const addNewArticle = useCallback(() => {
    if (isValid) {
      dispatch(
        addPost({
          title,
          content,
          imgSrc:
            imageURL ||
            'https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg',
          link: link || 'No link provided',
          date: Date.now(),
          id: String(news.length + 1),
        }),
      );

      setTitle('');
      setImageURL('');
      setLink('');
      setContent('');
      setIsValid(false);

      navigation.navigate('Home');
    }
  }, [content, dispatch, imageURL, isValid, link, navigation, news.length, title]);

  return {
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
  };
};
