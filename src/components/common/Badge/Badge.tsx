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
 * @description 공통 Badge 컴포넌트
 * @param $size font-size의 크기
 * @param $state basic, focus, hashTag, hot이 있으면 background-color와 color의 색깔을 지정합니다.
 * @param $margin margin 값을 받습니다.
 * @param $hover true false에 따라 hover가 적용됩니다.
 * @param $text 뱃지안에 들어간 text값 입니다.
 * @returns
 */

const Badge = ({
  $state,
  $isHover,
  $size,
  $text,
  $margin,
  ...props
}: PropsBadge) => {
  return (
    <StyledBadge
      $size={$size}
      $state={$state}
      $isHover={$isHover}
      $margin={$margin}
      {...props}
    >
      {$state === 'hashTag' ? `#${$text}` : $text}
    </StyledBadge>
  );
};

export default Badge;
