import { useTheme } from 'styled-components';

import Button from '@/components/common/Button';
import { FONT_MEDIUM } from '@/constants';
import useResize from '@/hooks/useResize';

import MyBundleItem from '../MyBundleItem';
import { BundleWrapper, Container } from './MyBundleList.style';
import { MyBundleListProps } from './MyBundleList.type';

const MyBundleList = ({
  bundles,
  selectedBundle,
  setSelectedBundle,
}: MyBundleListProps) => {
  const { isMobileSize } = useResize();
  const theme = useTheme();

  const handleAddBundle = () => {
    // @TODO 꾸러미 추가 모달 열기
    console.log('꾸러미 추가');
  };

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
          onClick={handleAddBundle}
        />
      </BundleWrapper>
    </Container>
  );
};

export default MyBundleList;
