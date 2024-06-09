import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../types/Navigator.ts';
import {Article} from '../../types/Article.ts';

export type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Home'
>;

export interface HomeViewProps {
  news: Article[];
  isLoading: boolean;
  error: string;
  onGoToArticle: (id: string) => void;
  onModalOpen: (id: string) => void;
  refRBSheet: any;
  onArticleDelete: () => void;
}
