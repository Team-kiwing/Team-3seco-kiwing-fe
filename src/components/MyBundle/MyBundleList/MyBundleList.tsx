import { useTheme } from 'styled-components';

import Button from '@/components/common/Button';
import { FONT_MEDIUM } from '@/constants';
import useResize from '@/hooks/useResize';

import MyBundleItem from '../MyBundleItem';
import { BundleWrapper, Container } from './MyBundleList.style';

export interface Bundle {
  id: number;
  name: string;
  shareType: 'PRIVATE' | 'PUBLIC';
}

const MyBundleList = ({
  bundles,
  selectedBundle,
  setSelectedBundle,
}: {
  bundles: Bundle[];
  selectedBundle: Bundle | null;
  setSelectedBundle: (state: Bundle) => void;
}) => {
  const { isMobileSize } = useResize();
  const theme = useTheme();

  return (
    <Container $isMobileSize={isMobileSize}>
      <BundleWrapper>
        {bundles.map((bundle) => (
          <MyBundleItem
            key={bundle.id}
            selectedBundle={selectedBundle}
            setSelectedBundle={setSelectedBundle}
            bundle={bundle}
            isMobileSize={isMobileSize}
          />
        ))}
        <Button
          width="100%"
          height="5rem"
          borderColor={`${theme.symbol_color}`}
          hoverBackgroundColor={`${theme.symbol_color}`}
          backgroundColor="transparent"
          textColor={`${theme.symbol_color}`}
          text="+ 새 질문 꾸러미 추가하기"
          style={{
            fontWeight: `${FONT_MEDIUM}`,
          }}
        />
      </BundleWrapper>
    </Container>
  );
};

export default MyBundleList;
