import { useState } from 'react';

import { useModal } from '@/hooks/useModal';
import useResize from '@/hooks/useResize';

import Badge from '../Badge';
import CircleButton from '../CircleButton';
import DropDown from '../DropDown';
import ShadowBox from '../ShadowBox';
import { QuestionCardModal } from './QuestionCard.Modal';
import {
  QuestionCardAddButton,
  QuestionCardBadgeWrapper,
  QuestionCardBodyWrapper,
  QuestionCardContainer,
  QuestionCardHashTags,
  QuestionCardInfoBadges,
  QuestionCardReportBadge,
  QuestionCardText,
} from './QuestionCard.style';
import { QuestionCardProps } from './QuestionCard.type';

const DUMMY = [
  {
    id: 1,
    title: '삼성 질문 리스트',
    body: '이미 이 질문이 추가된 적이 있어요!',
  },
  {
    id: 2,
    title: '카카오 질문 리스트',
  },
  {
    id: 3,
    title: '데브코스 질문 리스트',
  },
  {
    id: 4,
    title: 'LG 질문 리스트',
    body: '이미 이 질문이 추가된 적이 있어요!',
  },
];

const QuestionCard = ({
  id,
  question,
  hashTags,
  subscribedCount,
  isHot,
  isLogin,
}: QuestionCardProps) => {
  const { isMobileSize } = useResize();
  const { setModalOpen } = useModal();
  const [isLocked, setIsLocked] = useState(false);

  const handleReportClick = () => {
    setModalOpen({
      title: '신고하기',
      content: <QuestionCardModal />,
    });
  };

  const handleToggleClick = () => {
    setIsLocked(true);
  };

  const handleAdd = (checkedItems: number[]) => {
    //todo API 연동
    console.log(checkedItems);
  };

  return (
    <>
      <ShadowBox
        style={{
          position: 'relative',
          maxWidth: '1140px',
          boxSizing: 'border-box',
          cursor: 'auto',
        }}
        isCard={true}
        width="100%"
        height="fit-content"
      >
        {isLogin && (
          <QuestionCardAddButton>
            <CircleButton
              id={String(id)}
              onClick={handleToggleClick}
            />
            <DropDown
              width="200px"
              options={DUMMY}
              isShow={isLocked}
              setIsShow={setIsLocked}
              mode="checkbox"
              onAdd={handleAdd}
              triggerId={String(id)}
            />
          </QuestionCardAddButton>
        )}

        <QuestionCardContainer id={String(id)}>
          <QuestionCardBodyWrapper>
            <QuestionCardText>{question}</QuestionCardText>
            <QuestionCardHashTags>
              {hashTags.map((item) => (
                <Badge
                  key={item.id}
                  $size={isMobileSize ? 'xs' : 's'}
                  $state="hashTag"
                  $text={item.tagName}
                />
              ))}
            </QuestionCardHashTags>
          </QuestionCardBodyWrapper>

          <QuestionCardBadgeWrapper>
            <QuestionCardInfoBadges>
              {isHot && (
                <Badge
                  style={{ cursor: 'default' }}
                  $size={isMobileSize ? 'xs' : 's'}
                  $state="hot"
                  $text="HOT"
                />
              )}
              <Badge
                $size={isMobileSize ? 'xs' : 's'}
                $state="subscribedTag"
                $subscribedCount={subscribedCount}
              />
            </QuestionCardInfoBadges>
            {isLogin && (
              <QuestionCardReportBadge>
                <Badge
                  $isHover
                  $size={'xs'}
                  $state="basic"
                  $text="신고"
                  onClick={handleReportClick}
                />
              </QuestionCardReportBadge>
            )}
          </QuestionCardBadgeWrapper>
        </QuestionCardContainer>
      </ShadowBox>
    </>
  );
};

export default QuestionCard;
