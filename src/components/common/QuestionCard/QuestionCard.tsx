import { Link } from 'react-router-dom';
import { useTheme } from 'styled-components';

import useDropDown from '@/hooks/useDropDown';
import useResize from '@/hooks/useResize';
import { userDataStore } from '@/stores';

import Badge from '../Badge';
import CircleButton from '../CircleButton';
import DropDown from '../DropDown';
import ShadowBox from '../ShadowBox';
import { QuestionCardConstants } from './QuestionCard.const';
import {
  useCreateQuestionsToBundle,
  useReportModal,
} from './QuestionCard.hook';
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
import {
  BundleParsed,
  BundleResult,
  QuestionCardProps,
} from './QuestionCard.type';

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
  Bundle,
}: QuestionCardProps) => {
  const { isMobileSize } = useResize();
  const theme = useTheme();
  const { handleReportClick } = useReportModal({ questionId: id });
  const { isShow, setIsShow, openDropDown, triggerId, closeDropDown } =
    useDropDown(String(id));
  const { nickname } = userDataStore();

  const transType = (data: BundleParsed[]) => {
    return data.map((item: BundleResult) => {
      return {
        id: item.id,
        title: item.name,
      };
    });
  };

  const { mutate } = useCreateQuestionsToBundle();

  const handleAdd = (checkedItems: number[]) => {
    console.log(checkedItems);
    if (checkedItems.length === 0) return;
    mutate({ ids: [id], checkedBundles: checkedItems });
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
            {Bundle && (
              <DropDown
                width={Bundle.length === 0 ? 25 : 20}
                height={Bundle.length === 0 ? 15 : 20}
                options={transType(Bundle)}
                isShow={isShow}
                setIsShow={setIsShow}
                mode="checkbox"
                onAdd={handleAdd}
                closeDropDown={closeDropDown}
                direction="left"
                emptyText={
                  <>
                    <div
                      style={{
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '2rem',
                      }}
                    >
                      <p
                        style={{
                          margin: 0,
                          fontSize: isMobileSize ? '1.2rem' : '1.6rem',
                        }}
                      >
                        아직 꾸러미가 하나도 없어요😢
                      </p>
                      <Link
                        style={{
                          textDecoration: 'none',
                          color: theme.primary_color,
                          fontSize: isMobileSize ? '1.2rem' : '1.6rem',
                        }}
                        to={`/user/${nickname}`}
                      >
                        꾸러미 만들러 가기👆
                      </Link>
                    </div>
                  </>
                }
              />
            )}
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
                  $size={isMobileSize ? 'xs' : 's'}
                  $state="hot"
                  $text="HOT"
                />
              )}
              <Badge
                style={{ cursor: 'default', padding: '0.5rem 1.3rem' }}
                $size={isMobileSize ? 'xs' : 's'}
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
