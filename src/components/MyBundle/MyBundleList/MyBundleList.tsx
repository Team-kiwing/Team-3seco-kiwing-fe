import Button from '@/components/common/Button';

import MyBundleItem from '../MyBundleItem';
import { useMyBundleModal } from '../MyBundleModal/MyBundleModal.hook';
import { BundleWrapper, ButtonWrapper, Container } from './MyBundleList.style';
import { MyBundleListProps } from './MyBundleList.type';

const MyBundleList = ({
  bundles,
  selectedBundleId,
  setSelectedBundleId,
}: MyBundleListProps) => {
  const { handleAddBundleClick } = useMyBundleModal();

  return (
    <Container>
      <BundleWrapper>
        {bundles.map((bundle) => (
          <MyBundleItem
            key={bundle.id}
            bundle={bundle}
            selectedBundleId={selectedBundleId}
            setSelectedBundleId={setSelectedBundleId}
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
