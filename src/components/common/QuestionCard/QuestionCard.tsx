import { useModal } from '@/hooks/useModal';
import useResize from '@/hooks/useResize';

import Badge from '../Badge';
import CircleButton from '../CircleButton';
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

  const handleReportClick = () => {
    setModalOpen({
      title: '신고하기',
      content: <QuestionCardModal />,
    });
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
            <CircleButton />
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
