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
                $text={subscribedCount.toString()}
              />
            </BundleCardBadgeWrapper>
          </BundleCardItemContent>
        </BundleCardItemWrapper>
      </ShadowBox>
    </BundleCardWrapper>
  );
};

export default BundleCard;
