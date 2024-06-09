import {HomeView} from './HomeView.tsx';
import {useHome} from './hooks/useHome.ts';

export const Home = () => {
  const {
    onGoToArticle,
    news,
    isLoading,
    error,
    onModalOpen,
    refRBSheet,
    onArticleDelete,
  } = useHome();
  return (
    <HomeView
      news={news}
      isLoading={isLoading}
      error={error}
      onGoToArticle={onGoToArticle}
      onModalOpen={onModalOpen}
      refRBSheet={refRBSheet}
      onArticleDelete={onArticleDelete}
    />
  );
};
