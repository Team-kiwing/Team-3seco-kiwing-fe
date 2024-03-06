import Button from '@/components/common/Button';
import { useFetchTags } from '@/hooks/useFetchTags';
import useResize from '@/hooks/useResize';

import MyBundleItem from '../MyBundleItem';
import { useMyBundleModal } from '../MyBundleModal/MyBundleModal.hook';
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
  const { handleAddBundleClick } = useMyBundleModal(tags);

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
            tags={tags}
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
