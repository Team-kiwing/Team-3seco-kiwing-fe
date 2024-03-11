import Button from '@/components/common/Button';

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
  const { handleAddBundleClick } = useMyBundleModal();

  if (!bundles) {
    return (
      <Container>
        <BundleWrapper>
          <BundleListSkeleton />
        </BundleWrapper>
      </Container>
    );
  }

  return (
    <Container>
      <BundleWrapper>
        {bundles.map((bundle) => (
          <MyBundleItem
            key={bundle.id}
            bundleId={bundle.id}
            selectedBundle={selectedBundle}
            setSelectedBundle={setSelectedBundle}
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
