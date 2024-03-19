export interface SelectorProps {
  content: string[];
  isState: boolean;
  setIsState: (item: boolean) => void;
  size?: number;
}

export interface SelectorStyleProps {
  $setIsState: boolean;
  $size: number;
}

export type SelectorStickProps = Omit<SelectorStyleProps, '$setIsState'>;
