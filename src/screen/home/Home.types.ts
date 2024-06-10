import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../types/Navigator.ts';
import {Article} from '../../types/Article.ts';
import * as trace_events from "trace_events";

export type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Home'
>;

export interface HomeViewProps {
  news: Article[];
  isLoading: boolean;
  error: string;
  onGoToArticle: (id: string) => void;
  onGoToNewPost: () => void;
  onModalOpen: (id: string) => void;
  refRBSheet: any;
  onArticleDelete: () => void;
  query: string;
  handleQueryChange: (text: string) => void;
  onFetchNews: () => void;
}
