import useResize from '@/hooks/useResize';

import Badge from '../Badge';
import CircleButton from '../CircleButton';
import ShadowBox from '../ShadowBox';
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
}: QuestionCardProps) => {
  const { isMobileSize } = useResize();
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
        <QuestionCardAddButton>
          <CircleButton />
        </QuestionCardAddButton>

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
            <QuestionCardReportBadge>
              <Badge
                $isHover
                $size={'xs'}
                $state="basic"
                $text="신고"
              />
            </QuestionCardReportBadge>
          </QuestionCardBadgeWrapper>
        </QuestionCardContainer>
      </ShadowBox>
    </>
  );
};

export default QuestionCard;
