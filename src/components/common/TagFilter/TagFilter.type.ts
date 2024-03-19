import { Tag } from '@/types';

export interface TagFilterProps extends React.HTMLAttributes<HTMLDivElement> {
  tagList: Tag[];
  setSelectedTags: (tags: Tag[]) => void;
  selectedTags: Tag[];
  isLimit?: boolean;
}
