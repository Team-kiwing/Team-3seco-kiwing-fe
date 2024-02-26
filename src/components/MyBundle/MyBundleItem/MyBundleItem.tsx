import { ReactNode } from 'react';

import ShadowBox from '@/components/common/ShadowBox';

import { RightItem, Title } from './MyBundleItem.style';
import { Bundle } from './MyBundleItem.type';

const MyBundleItem = ({
  setSelectedBundle,
  bundle,
  isActive,
  rightItem,
  isMobileSize,
}: {
  setSelectedBundle: (state: Bundle) => void;
  bundle: Bundle;
  isActive: boolean;
  rightItem: ReactNode;
  isMobileSize: boolean;
}) => {
  return (
    <ShadowBox
      width="100%"
      height="fit-content"
      isActive={isActive}
      isHoverActive={!isMobileSize}
      onClick={() => setSelectedBundle(bundle)}
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
        boxSizing: 'border-box',
      }}
    >
      <Title $isMobileSize={isMobileSize}>{bundle.name}</Title>
      {isMobileSize && <RightItem>{rightItem}</RightItem>}
    </ShadowBox>
  );
};

export default MyBundleItem;
