export interface TagProps {
  id: number;
  name: string;
}

export interface TagFilterProps extends React.HTMLAttributes<HTMLDivElement> {
  tagList: TagProps[];
  setSelectedTags: (tags: TagProps[]) => void;
  selectedTags: TagProps[];
}
