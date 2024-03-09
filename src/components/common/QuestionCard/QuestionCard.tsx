import useDropDown from '@/hooks/useDropDown';
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

/**
 * @summary 사용법                 
 *              <QuestionCard
                  tags={questionItem.tags}
                  id={questionItem.id}
                  question={questionItem.question}
                  subscribedCount={questionItem.subscribed}
                  isHot={questionItem.isHot}
                  isLogin={Number(questionItem.id) < 3}
                />
 * @description QuestionCard컴포넌트입니다. 모든 props가 필수요소입니다.
 * @param id: number
 * @param content: string;
 * @param tags: tagProps[ id: number; tagName: string; ];
 * @param shareCount: number;
 * @param isHot: boolean;
 * @param isLogin: boolean;
 * @returns
 */
const QuestionCard = ({
  id,
  content,
  tags,
  shareCount,
  isHot,
  isLogin,
}: QuestionCardProps) => {
  const { isMobileSize } = useResize();
  const { handleReportClick } = useReportModal();
  const { isShow, setIsShow, openDropDown, triggerId, closeDropDown } =
    useDropDown(String(id));

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
          <QuestionCardAddButton style={{ zIndex: '2' }}>
            <CircleButton
              style={{ position: 'relative' }}
              size={isMobileSize ? '5rem' : '6rem'}
              id={triggerId}
              onClick={openDropDown}
            />
            <DropDown
              width={20}
              // todo API 사전 호출으로 인한 캐싱동작 추가 예정
              options={DUMMY}
              isShow={isShow}
              setIsShow={setIsShow}
              mode="checkbox"
              onAdd={handleAdd}
              closeDropDown={closeDropDown}
              direction="left"
            />
          </QuestionCardAddButton>
        )}

        <QuestionCardContainer id={String(id)}>
          <QuestionCardBodyWrapper>
            <QuestionCardText>{content}</QuestionCardText>
            <QuestionCardHashTags>
              {tags.map((item) => (
                <Badge
                  style={{ padding: '0 0.5rem 0 0' }}
                  key={item.id}
                  $size={isMobileSize ? 'xs' : 's'}
                  $state="hashTag"
                  $text={item.name}
                />
              ))}
            </QuestionCardHashTags>
          </QuestionCardBodyWrapper>

          <QuestionCardBadgeWrapper>
            <QuestionCardInfoBadges $isLogin={isLogin}>
              {isHot && (
                <Badge
                  style={{ cursor: 'default', padding: '0.5rem 1.3rem' }}
                  $size={isMobileSize ? 1.2 : 's'}
                  $state="hot"
                  $text="HOT"
                />
              )}
              <Badge
                style={{ cursor: 'default', padding: '0.5rem 1.3rem' }}
                $size={isMobileSize ? 1.2 : 's'}
                $state="subscribedTag"
                $subscribedCount={shareCount}
              />
            </QuestionCardInfoBadges>
            {isLogin && (
              <QuestionCardReportBadge>
                <Badge
                  $isHover
                  $size={isMobileSize ? 'xxs' : 'xs'}
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
