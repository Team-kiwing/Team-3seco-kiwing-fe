export interface MyBundleDropDownProps {
  isDropDownShow: boolean;
  setIsDropDownShow: (state: boolean) => void;
  isShared: boolean;
  setIsShared: (state: boolean) => void;
  triggerId: string;
  bundleId: number;
}
