import {useAppDispatch, useAppSelector} from '../../../store/hooks/redux.ts';
import {useCallback, useEffect, useRef, useState} from 'react';
import {
  fetchNews,
  removePost,
} from '../../../store/actionCreators/ActionCreator.ts';
import {useNavigation} from '@react-navigation/native';
import {HomeScreenNavigationProp} from '../Home.types.ts';
import {
  selectFilteredData,
  selectQuery,
} from '../../../store/selectors/selectors.ts';
import {setQuery} from '../../../store/reducers/newsSlice.ts';

export const useHome = () => {
  const dispatch = useAppDispatch();
  const {isLoading, error} = useAppSelector(state => state.newsReducer);
  const [selectedArticle, setSelectedArticle] = useState<string | null>(null);
  const news = useAppSelector(selectFilteredData);

  const query = useAppSelector(selectQuery);

  const handleQueryChange = useCallback(
    (searchQuery: string) => {
      dispatch(setQuery(searchQuery));
    },
    [dispatch],
  );

  useEffect(() => {
    dispatch(fetchNews());
  }, [dispatch]);

  const onFetchNews = useCallback(() => {
    dispatch(fetchNews());
    dispatch(setQuery(''));
  }, [dispatch]);

  const navigation = useNavigation<HomeScreenNavigationProp>();

  const onGoToArticle = useCallback(
    (id: string) => {
      navigation.navigate('Post', {id: id});
    },
    [navigation],
  );

  const onGoToNewPost = useCallback(() => {
    navigation.navigate('NewPost');
  }, [navigation]);

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
    onGoToNewPost,
    news,
    isLoading,
    error,
    onModalOpen,
    onArticleDelete,
    refRBSheet,
    query,
    handleQueryChange,
    onFetchNews,
  };
};
