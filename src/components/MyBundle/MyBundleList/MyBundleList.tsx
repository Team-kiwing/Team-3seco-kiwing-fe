import { useTheme } from 'styled-components';

import Button from '@/components/common/Button';
import { FONT_MEDIUM } from '@/constants';
import useResize from '@/hooks/useResize';

import MyBundleItem from '../MyBundleItem';
import { useAddBundleModal, useFetchTags } from './MyBundleList.hook';
import { BundleWrapper, Container } from './MyBundleList.style';
import { MyBundleListProps } from './MyBundleList.type';

const MyBundleList = ({
  bundles,
  selectedBundle,
  setSelectedBundle,
}: MyBundleListProps) => {
  const { isMobileSize } = useResize();
  const theme = useTheme();

  const { data: tags, isLoading } = useFetchTags();
  const { handleAddBundleClick } = useAddBundleModal(tags);

  // @TODO 스켈레톤 UI 적용하기
  if (!tags || isLoading) {
    return <div>로딩중</div>;
  }

  return (
    <Container $isMobileSize={isMobileSize}>
      <BundleWrapper $isMobileSize={isMobileSize}>
        {bundles.map((bundle) => (
          <MyBundleItem
            key={bundle.id}
            selectedBundle={selectedBundle}
            setSelectedBundle={setSelectedBundle}
            bundle={bundle}
            isMobileSize={isMobileSize}
          />
        ))}
      </BundleWrapper>
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
        onClick={handleAddBundleClick}
      />
    </Container>
  );
};

export default MyBundleList;
