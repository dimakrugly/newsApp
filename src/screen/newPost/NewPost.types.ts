import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../types/Navigator.ts';

export interface NewPostProps {
  title: string;
  imageURL: string;
  link: string;
  content: string;
  setTitle: (value: any) => void;
  setImageURL: (text: string) => void;
  setLink: (text: string) => void;
  setContent: (text: string) => void;
  isValid: boolean;
  addNewArticle: () => void;
}

export type NewPostScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'NewPost'
>;
