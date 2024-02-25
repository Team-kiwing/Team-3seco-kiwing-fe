export interface SelectorProps {
  content: string[];
  isState: boolean;
  size?: number;
  onSelected: (item: boolean) => void;
}

export interface SelectorStyleProps {
  $isSelected: boolean;
  $size: number;
}

export type SelectorStickProps = Omit<SelectorStyleProps, '$isSelected'>;
