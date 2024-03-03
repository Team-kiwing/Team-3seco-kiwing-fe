import Button from '@/components/common/Button';
import useResize from '@/hooks/useResize';

import MyBundleItem from '../MyBundleItem';
import { useAddBundleModal, useFetchTags } from './MyBundleList.hook';
import { BundleWrapper, ButtonWrapper, Container } from './MyBundleList.style';
import { MyBundleListProps } from './MyBundleList.type';
import BundleListSkeleton from './Skeletion';

const MyBundleList = ({
  bundles,
  selectedBundle,
  setSelectedBundle,
}: MyBundleListProps) => {
  const { isMobileSize } = useResize();

  const { data: tags, isLoading } = useFetchTags();
  const { handleAddBundleClick } = useAddBundleModal(tags);

  if (!tags || isLoading) {
    return (
      <Container>
        <BundleListSkeleton />
      </Container>
    );
  }

  return (
    <Container>
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
      </BundleWrapper>
      <ButtonWrapper>
        <Button
          width="100%"
          height="5rem"
          text="+ 새 질문 꾸러미 추가하기"
          onClick={handleAddBundleClick}
        />
      </ButtonWrapper>
    </Container>
  );
};

export default MyBundleList;
