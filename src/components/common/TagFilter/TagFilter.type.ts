export interface TagProps {
  id: number;
  name: string;
}

export interface TagFilterProps extends React.HTMLAttributes<HTMLDivElement> {
  selectedTags: (item: string[]) => void;
}
