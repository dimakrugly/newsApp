import {PostView} from './PostView.tsx';
import {useRoute} from '@react-navigation/native';
import {useAppSelector} from '../../store/hooks/redux.ts';
import {selectArticleById} from '../../store/selectors/selectors.ts';

export const Post = () => {
  const route = useRoute();
  const {id} = route.params;

  const article = useAppSelector(state => selectArticleById(state, id));

  return (
    <PostView
      title={article?.title || ''}
      date={article?.date || ''}
      content={article?.content || ''}
      imgSrc={article?.imgSrc || ''}
    />
  );
};
