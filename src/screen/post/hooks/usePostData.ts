import {useRoute} from '@react-navigation/native';
import {useAppSelector} from '../../../store/hooks/redux.ts';
import {selectArticleById} from '../../../store/selectors/selectors.ts';
import useTime from '../../../hooks/useTime.ts';
import {PostScreenRouteProp} from '../Post.types.ts';

export const usePostData = () => {
  const route = useRoute<PostScreenRouteProp>();
  const {id} = route.params;

  const article = useAppSelector(state => selectArticleById(state, id));
  const {timeCreated} = useTime(article?.date as number);

  return {
    id,
    timeCreated,
    article,
  };
};
