import { Direction } from '@/types/dropdown';

export interface SharedBundleDropDownProps {
  isShow: boolean;
  setIsShow: (state: boolean) => void;
  closeDropDown: (e: Event) => void;
  direction: Direction;
  onAddBundle: () => void;
  bundleId: number;
}
