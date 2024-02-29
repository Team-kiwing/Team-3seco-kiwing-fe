// @TODO 추후에 전역 type으로 이동합니다.
export interface Bundle {
  id: number;
  name: string;
  shareType: 'PRIVATE' | 'PUBLIC';
}

export interface MyBundleListProps {
  bundles: Bundle[];
  selectedBundle: Bundle | null;
  setSelectedBundle: (state: Bundle) => void;
}
