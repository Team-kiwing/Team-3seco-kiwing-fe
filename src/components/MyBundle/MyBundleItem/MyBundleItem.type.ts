// @TODO 추후에 전역 types 폴더로 이동 예정
export interface Bundle {
  id: number;
  name: string;
  shareType: 'PRIVATE' | 'PUBLIC';
}

export interface MyBundleItem {
  selectedBundle: Bundle | null;
  setSelectedBundle: (state: Bundle) => void;
  bundle: Bundle;
  isMobileSize: boolean;
}
