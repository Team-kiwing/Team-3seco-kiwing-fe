import { PropsWithChildren } from 'react';

import { StyledBadge } from './Badge.style';
import { PropsBadge } from './Badge.type';

const Badge = ({
  $state,
  children,
  $hover,
  $isActive,
  $size,
  ...props
}: PropsWithChildren<PropsBadge>) => {
  return (
    <StyledBadge
      $size={$size}
      $state={$state}
      $hover={$hover}
      $isActive={$isActive}
      {...props}
    >
      {children}
    </StyledBadge>
  );
};

export default Badge;
