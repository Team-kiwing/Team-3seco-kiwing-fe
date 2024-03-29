import { BsBookmarksFill } from 'react-icons/bs';

import IconWrapper from '../IconWrapper/IconWrapper';
import { StyledBadge } from './Badge.style';
import { PropsBadge } from './Badge.type';
/**
 * @summary 사용법 <Badge
      $size={'m'}
      $state="basic"
      $margin="10px 0px 3px 10px"
      $isHover={true}
      $text={'백엔드'}
    />
    <Badge
      $size={'xs'}
      $state="hashTag"
      $text={'백엔드'}
    />
     <Badge
      $size={'s'}
      $state=""
      $text={'백엔드'}
    />
        <Badge
          $size={'m'}
          $state="subscribedTag"
          $subscribedCount={11150}
        />
 * @description 공통 Badge 컴포넌트
 * @param $size 필수) font-size의 크기입니다 'xxs, xs, s, m, l' 타입과 number타입이 있습니다.
 * @param $state 필수) basic, focus, hashTag, hot, subscribedTag이 있으면 background-color와 color의 색깔을 지정합니다.
 * @param $margin 선택) margin 값을 받습니다.
 * @param $hover 선택) true false에 따라 hover가 적용됩니다.
 * @param $text 선택) 뱃지안에 들어가는 값입니다. (ReactNode타입 입니다.)
 * @param $subscribedCount 선택) 스크랩한 개수를 받습니다. (Number 타입니다.)
 * @returns
 */

const Badge = ({
  $state,
  $isHover,
  $size,
  $text,
  $margin,
  $subscribedCount,
  ...props
}: PropsBadge) => {
  const displayText = () => {
    if ($subscribedCount !== undefined && $state === 'subscribedTag') {
      return (
        <>
          <IconWrapper
            style={{ cursor: 'default' }}
            $size={$size === 'xs' ? 1.5 : 1.8}
          >
            <BsBookmarksFill />
          </IconWrapper>
          <span>
            {$subscribedCount < 1000
              ? $subscribedCount
              : `${Math.floor($subscribedCount / 100) / 10}K+`}
          </span>
        </>
      );
    } else if ($state === 'hashTag') {
      return `#${$text}`;
    }
    return $text;
  };

  return (
    <>
      <StyledBadge
        $size={$size}
        $state={$state}
        $isHover={$isHover}
        $margin={$margin}
        {...props}
      >
        {displayText()}
      </StyledBadge>
    </>
  );
};

export default Badge;
