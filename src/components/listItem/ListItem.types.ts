import {Article} from '../../types/Article.ts';

export interface ListItemProps {
  article: Article;
  id: any;
  onPress: () => void;
  onLongPress: () => void;
}
