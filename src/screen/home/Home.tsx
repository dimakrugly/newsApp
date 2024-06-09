import {HomeView} from './HomeView.tsx';
import {useHome} from './hooks/useHome.ts';

export const Home = () => {
  const {
    onGoToArticle,
    onGoToNewPost,
    news,
    isLoading,
    error,
    onModalOpen,
    refRBSheet,
    onArticleDelete,
    query,
    handleQueryChange,
  } = useHome();
  return (
    <HomeView
      news={news}
      isLoading={isLoading}
      error={error}
      onGoToArticle={onGoToArticle}
      onGoToNewPost={onGoToNewPost}
      onModalOpen={onModalOpen}
      refRBSheet={refRBSheet}
      onArticleDelete={onArticleDelete}
      query={query}
      handleQueryChange={handleQueryChange}
    />
  );
};
