import { useState } from 'react';
import { useTheme } from 'styled-components';

import Button from '@/components/common/Button';
import useResize from '@/hooks/useResize';

import MyBundleItem from '../MyBundleItem';

export interface Bundle {
  id: number;
  name: string;
  shareType: 'PRIVATE' | 'PUBLIC';
}

const MyBundleList = ({ bundles }: { bundles: Bundle[] }) => {
  const { isMobileSize } = useResize();
  const theme = useTheme();
  const [selectedBundle, setSelectedBundle] = useState<Bundle | null>(null);

  return bundles.map((bundle, index) => (
    <div
      key={index}
      style={{
        width: '85%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '1.5rem',
      }}
    >
      <MyBundleItem
        selectedBundle={selectedBundle}
        setSelectedBundle={setSelectedBundle}
        bundle={bundle}
        isMobileSize={isMobileSize}
      />
      <Button
        width="85%"
        height="5rem"
        borderColor={`${theme.symbol_color}`}
        hoverBackgroundColor={`${theme.symbol_color}`}
        backgroundColor="transparent"
        textColor={`${theme.symbol_color}`}
        text="+ 새 질문 꾸러미 추가하기"
        style={{ flexShrink: 0 }}
      />
    </div>
  ));
};

export default MyBundleList;
