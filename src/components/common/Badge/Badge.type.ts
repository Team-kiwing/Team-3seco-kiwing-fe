import { ReactNode } from 'react';

export interface PropsBadge extends React.HTMLAttributes<HTMLSpanElement> {
  $state: 'basic' | 'focus' | 'hashTag' | 'hot' | 'subscribedTag';
  $size: 'xxs' | 'xs' | 's' | 'm' | 'l' | number;
  $text?: ReactNode;
  $isHover?: boolean;
  $margin?: string;
  $subscribedCount?: number;
}

export type PropsStyledBadge = Omit<PropsBadge, '$text'>;
