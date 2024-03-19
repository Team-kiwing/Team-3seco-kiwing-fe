import { BundlesBasic } from '@/types';
import { Direction } from '@/types/dropdown';

import { EditProps } from '../MyBundleModal/MyBundleModal.type';

export interface MyBundleDropDownProps {
  isDropDownShow: boolean;
  setIsDropDownShow: (state: boolean) => void;
  bundle: BundlesBasic;
  closeDropDown: (e: Event) => void;
  direction: Direction;
  handleEditBundleClick: (state: EditProps) => void;
  isShared: boolean;
  setIsShared: (state: boolean) => void;
  setSelectedBundleId: (state: number | null) => void;
}
