export interface PropsBadge extends React.HTMLAttributes<HTMLSpanElement> {
  $state: 'basic' | 'focus' | 'hashTag' | 'hot' | 'subscribed';
  $size: 'xxs' | 'xs' | 's' | 'm' | 'l' | number;
  $text?: string;
  $isHover?: boolean;
  $margin?: string;
  $subscribedCount?: number;
}

export type PropsStyledBadge = Omit<PropsBadge, '$text'>;
