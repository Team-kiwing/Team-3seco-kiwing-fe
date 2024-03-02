import { useTheme } from 'styled-components';

import Button from '@/components/common/Button';
import { FONT_MEDIUM } from '@/constants';
import { useModal } from '@/hooks/useModal';
import useResize from '@/hooks/useResize';

import MyBundleItem from '../MyBundleItem';
import { useFetchTags } from './MyBundleList.hook';
import { MyBundleModal } from './MyBundleList.Modal';
import { BundleWrapper, Container } from './MyBundleList.style';
import { MyBundleListProps } from './MyBundleList.type';

// export const useMyBundleModal = ({ tags }: { tags: Tag[] }) => {
//   const { setModalOpen } = useModal();
//   const handleAddButtonClick = () => {
//     setModalOpen({
//       title: '질문 꾸러미',
//       content: <MyBundleModal tags={tags} />,
//     });
//   };

//   return { handleAddButtonClick };
// };

const MyBundleList = ({
  bundles,
  selectedBundle,
  setSelectedBundle,
}: MyBundleListProps) => {
  const { data: tags, isLoading } = useFetchTags();
  const { isMobileSize } = useResize();
  const { setModalOpen } = useModal();
  const theme = useTheme();

  if (!tags || isLoading) {
    return <div>로딩중</div>;
  }

  const handleAddButtonClick = () => {
    setModalOpen({
      title: '질문 꾸러미',
      content: <MyBundleModal tags={tags} />,
    });
  };

  // const handleTags = async () => {
  //   const res = await getTag();
  //   console.log(res);
  //   handleAddButtonClick();
  // };

  // const { setModalOpen } = useModal();

  // if (isLoading || !tags) {
  //   console.log(tags);
  //   return <div>로딩중</div>;
  // }

  // const handleAddButtonClick = () => {
  //   setModalOpen({
  //     title: '질문 꾸러미',
  //     content: <MyBundleModal tags={tags} />,
  //   });
  // };

  const handleAddBundle = () => {
    // @TODO 꾸러미 추가 모달 열기
    handleAddButtonClick();
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
