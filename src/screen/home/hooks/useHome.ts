import {useAppDispatch, useAppSelector} from '../../../store/hooks/redux.ts';
import {useCallback, useEffect, useRef, useState} from 'react';
import {
  fetchNews,
  removePost,
} from '../../../store/actionCreators/ActionCreator.ts';
import {useNavigation} from '@react-navigation/native';
import {HomeScreenNavigationProp} from '../Home.types.ts';

export const useHome = () => {
  const dispatch = useAppDispatch();
  const {news, isLoading, error} = useAppSelector(state => state.newsReducer);
  const [selectedArticle, setSelectedArticle] = useState<string | null>(null);

  useEffect(() => {
    dispatch(fetchNews());
  }, [dispatch]);

  const navigation = useNavigation<HomeScreenNavigationProp>();

  const onGoToArticle = useCallback(
    (id: string) => {
      navigation.navigate('Post', {id: id});
    },
    [navigation],
  );

  const onArticleDelete = useCallback(() => {
    if (selectedArticle) {
      dispatch(removePost(selectedArticle));
    }
    setSelectedArticle(null);
    refRBSheet.current.close();
  }, [dispatch, selectedArticle]);

  const refRBSheet = useRef<any>();

  const onModalOpen = useCallback((id: string) => {
    setSelectedArticle(id);
    refRBSheet.current.open();
  }, []);

  return {
    onGoToArticle,
    news,
    isLoading,
    error,
    onModalOpen,
    onArticleDelete,
    refRBSheet,
  };
};
