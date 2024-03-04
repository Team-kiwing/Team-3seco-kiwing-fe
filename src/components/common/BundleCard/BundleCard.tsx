import { useNavigate } from 'react-router-dom';

import useResize from '@/hooks/useResize';

import Badge from '../Badge';
import ShadowBox from '../ShadowBox';
import {
  BundleCardBadgeWrapper,
  BundleCardContentItem,
  BundleCardHashTagWrapper,
  BundleCardItemName,
  BundleCardItemWrapper,
  BundleCardWrapper,
} from './BundleCard.style';
import { BundleProps } from './BundleCard.type';

/**
 * @summary 사용법 <BundleCard
          id={list[0].id}
          bundleName={list[0].listName}
          tags={list[0].tags}
          subscribedCount={list[0].subscribed}
          isHot={true}
        />
 * @description 공통 BundleCard 컴포넌트
 * @param id 필수) 질문꾸러미의 id 값 number타입
 * @param bundleName 필수) 질문꾸러미의 이름 string타입
 * @param hashTags 필수) 질문꾸러미의 태그들을 받습니다.(배열 타입)
 * @param subscribedCount 필수) 질문꾸러미의 스크랩 수를 받습니다. number타입
 * @param isHot 필수) HOT뱃지 판단 값의 유무입니다. boolean타입
 * @returns
 */

const BundleCard = ({
  id,
  bundleName,
  hashTags,
  subscribedCount,
  isHot,
}: BundleProps) => {
  const { isMobileSize } = useResize();

  const navigate = useNavigate();
  return (
    <BundleCardWrapper onClick={() => navigate(`/shared/${id}`)}>
      <ShadowBox
        style={{
          boxSizing: 'border-box',
          cursor: 'pointer',
        }}
        isCard={true}
        width="100%"
        height="100%"
        isHoverActive={true}
      >
        <BundleCardItemWrapper>
          <BundleCardContentItem>
            <BundleCardItemName>{bundleName}</BundleCardItemName>
            <BundleCardHashTagWrapper>
              {hashTags.map((item) => (
                <Badge
                  key={item.id}
                  style={{ padding: '0 0.5rem 0 0' }}
                  $size={isMobileSize ? 's' : 1.5}
                  $state="hashTag"
                  $text={item.content}
                />
              ))}
            </BundleCardHashTagWrapper>
          </BundleCardContentItem>
          <BundleCardBadgeWrapper>
            <Badge
              style={{ padding: '0.5rem 1.3rem' }}
              $size={isMobileSize ? 'xs' : 's'}
              $state="subscribedTag"
              $subscribedCount={subscribedCount}
            />
            {isHot && (
              <Badge
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: '0.5rem 1.3rem',
                }}
                $size={isMobileSize ? 'xs' : 's'}
                $state="hot"
                $text="HOT"
              />
            )}
          </BundleCardBadgeWrapper>
        </BundleCardItemWrapper>
      </ShadowBox>
    </BundleCardWrapper>
  );
};

export default BundleCard;
