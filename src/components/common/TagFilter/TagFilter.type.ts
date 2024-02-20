export interface TagProps {
  id: number;
  name: string;
}

export interface TagFilterProps extends React.HTMLAttributes<HTMLDivElement> {
  tagList: TagProps[];
  selectedTags: (tags: string[]) => void;
  defaultTags: string[];
}
