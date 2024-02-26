import { ReactNode } from 'react';

// @TODO 추후에 전역 types 폴더로 이동 예정
export interface Bundle {
  id: number;
  name: string;
  shareType: 'PRIVATE' | 'PUBLIC';
}

export interface MyBundleItem {
  setSelectedBundle: (state: Bundle) => void;
  bundle: Bundle;
  isActive: boolean;
  rightItem: ReactNode;
  isMobileSize: boolean;
}
