import { Bundle } from '@/types';
import { Direction } from '@/types/dropdown';

import { FormField } from '../MyBundleModal/MyBundleModal.type';

export interface MyBundleDropDownProps {
  isDropDownShow: boolean;
  setIsDropDownShow: (state: boolean) => void;
  isShared: boolean;
  setIsShared: (state: boolean) => void;
  bundle: Bundle;
  closeDropDown: (e: Event) => void;
  direction: Direction;
  handleEditBundleClick: (state: FormField) => void;
}
