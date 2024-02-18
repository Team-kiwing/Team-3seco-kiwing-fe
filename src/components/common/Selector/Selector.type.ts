export interface SelectorProps {
  content: string[];
  size?: number;
  onSelected: (item: boolean) => void;
}
