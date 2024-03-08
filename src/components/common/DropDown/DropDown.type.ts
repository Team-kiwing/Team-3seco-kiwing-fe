import { ReactNode } from 'react';

import { Direction } from '@/types/dropdown';

export interface OptionType {
  id: number;
  title: ReactNode;
  body?: ReactNode;
  rightItem?: ReactNode;
  handler?: () => void;
}

export interface DropDownProps {
  width?: number;
  optionHeight?: number;
  height?: number;
  options: OptionType[];
  mode?: 'normal' | 'checkbox';
  onAdd?: (checkedItems: number[]) => void;
  isShow: boolean;
  setIsShow: (state: boolean) => void;
  closeDropDown: (e: Event) => void;
  direction: Direction;
}
