import { useNavigate } from 'react-router-dom';

import Badge from '../Badge';
import ShadowBox from '../ShadowBox';
import {
  BundleCardBadgeWrapper,
  BundleCardHashTagWrapper,
  BundleCardItemContent,
  BundleCardItemName,
  BundleCardItemWrapper,
  BundleCardWrapper,
} from './Bundle.style';
import { BundleProps } from './BundleCard.type';

/**
 * @summary 사용법 <BundleCard
          id={list[0].id}
          listName={list[0].listName}
          tags={list[0].tags}
          subscribedCount={list[0].subscribed}
        />
 * @description 공통 BundleCard 컴포넌트
 * @param id 필수) 질문꾸러미의 id 값 number타입
 * @param listName 필수) 질문꾸러미의 이름 string타입
 * @param tags 필수) 질문꾸러미의 태그들을 받습니다.(배열 타입)
 * @param subscribedCount 필수) 질문꾸러미의 스크랩 수를 받습니다. number타입
 * @returns
 */

const BundleCard = ({ id, listName, tags, subscribedCount }: BundleProps) => {
  const navigate = useNavigate();
  return (
    <BundleCardWrapper onClick={() => navigate(`/shared/${id}`)}>
      <ShadowBox
        style={{
          borderRadius: '15px',
          cursor: 'pointer',
        }}
        width="100%"
        height="100%"
        isHoverActive={true}
      >
        <BundleCardItemWrapper>
          <BundleCardItemName>{listName}</BundleCardItemName>
          <BundleCardItemContent>
            <BundleCardHashTagWrapper>
              {tags.map((item) => (
                <Badge
                  key={item.id}
                  style={{ padding: '0 0.5rem 0 0' }}
                  $size={'s'}
                  $state="hashTag"
                  $text={item.tagName}
                />
              ))}
            </BundleCardHashTagWrapper>
            <BundleCardBadgeWrapper>
              {subscribedCount > 100 && ( // 일단 100넘으면 HOT키워드 받도록 해놨습니다.
                <Badge
                  style={{ padding: '0.5rem 1.3rem', fontSize: '1.1rem' }}
                  $size={'xs'}
                  $state="hot"
                  $margin="0.8rem 0.4rem 0rem 0rem"
                  $text="HOT"
                />
              )}
              <Badge
                style={{ padding: '0.5rem 1.3rem', fontSize: '1.1rem' }}
                $size={'xs'}
                $state="basic"
                $margin="0.8rem 0.4rem 0rem 0rem"
                $text={subscribedCount.toString()} // 여기에 나중에 스크랩 뱃지로 변경하면 스크랩받는 props 추가할예정인데 지금은 일단 text로 해놨습니다.!
              />
            </BundleCardBadgeWrapper>
          </BundleCardItemContent>
        </BundleCardItemWrapper>
      </ShadowBox>
    </BundleCardWrapper>
  );
};

export default BundleCard;
