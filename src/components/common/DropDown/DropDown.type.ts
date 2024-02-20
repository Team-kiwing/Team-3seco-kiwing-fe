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
  buttonText?: string;
  handler?: (checkedItems: number[]) => void;
  isShow: boolean;
  onClose: () => void;
}
