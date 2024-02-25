import { ReactNode } from 'react';

export interface OptionType {
  id: number;
  title: ReactNode;
  body?: ReactNode;
  rightItem?: ReactNode;
  handler?: () => void;
}

export interface DropDownProps {
  width?: string;
  height?: string;
  options: OptionType[];
  mode?: 'normal' | 'checkbox';
  onAdd?: (checkedItems: number[]) => void;
  isShow: boolean;
  setIsShow: (state: boolean) => void;
  triggerId: string;
}
