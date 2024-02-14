import { StyledBadge } from './Badge.style';
import { PropsBadge } from './Badge.type';

/**
 * @summary 사용법 <Badge
      size={'m'}
      state={basic}
      hover={true}
      isActive={false}
    />
 * @description 공통 Badge 컴포넌트
 * @param size font-size의 크기
 * @param state basic, focus, hot이 있으면 background-color와 color의 색깔을 지정합니다.
 * @param hover true false에 따라 hover가 적용됩니다.
 * @param isActive true false에 따라 state 즉, background-color와 color가 변합니다.
 * @returns
 */

const Badge = ({ $state, $isHover, $size, $text, ...props }: PropsBadge) => {
  return (
    <StyledBadge
      $size={$size}
      $state={$state}
      $isHover={$isHover}
      $text={$text}
      {...props}
    >
      {$text}
    </StyledBadge>
  );
};

export default Badge;
