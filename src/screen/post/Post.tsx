import {PostView} from './Post.view.tsx';
import {usePostData} from './hooks/usePostData.ts';

export const Post = () => {
  const {timeCreated, article} = usePostData();

  return (
    <PostView
      title={article?.title || ''}
      date={timeCreated}
      content={article?.content || ''}
      imgSrc={article?.imgSrc || ''}
    />
  );
};
