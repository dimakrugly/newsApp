import {RouteProp} from '@react-navigation/native';
import {RootStackParamList} from '../../types/Navigator.ts';

export interface PostViewProps {
  title: string;
  date: string;
  content: string;
  imgSrc: string;
}

export type PostScreenRouteProp = RouteProp<RootStackParamList, 'Post'>;
