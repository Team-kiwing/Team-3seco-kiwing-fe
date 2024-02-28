import { useState } from 'react';

import useResize from '@/hooks/useResize';

import Badge from '../Badge';
import CircleButton from '../CircleButton';
import DropDown from '../DropDown';
import ShadowBox from '../ShadowBox';
import { DUMMY, QuestionCardConstants } from './QuestionCard.const';
import { useReportModal } from './QuestionCard.hook';
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

const QuestionCard = ({
  id,
  question,
  hashTags,
  subscribedCount,
  isHot,
  isLogin,
}: QuestionCardProps) => {
  const { isMobileSize } = useResize();
  const { handleReportClick } = useReportModal();
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);

  const handleAddToggleClick = () => {
    setIsDropDownOpen(true);
  };

  const handleAdd = (checkedItems: number[]) => {
    //todo 내 리스트에 추가하기 API 연동
    console.log(checkedItems);
  };

  return (
    <>
      <ShadowBox
        style={{
          position: 'relative',
          maxWidth: `${QuestionCardConstants.MAX_WIDTH}px`,
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
              onClick={handleAddToggleClick}
            />
            <DropDown
              width="200px"
              // todo API 사전 호출으로 인한 캐싱동작 추가 예정
              options={DUMMY}
              isShow={isDropDownOpen}
              setIsShow={setIsDropDownOpen}
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
                  $text={QuestionCardConstants.REPORT_BADGE}
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
