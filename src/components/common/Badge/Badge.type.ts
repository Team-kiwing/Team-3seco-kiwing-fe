export interface PropsBadge extends React.HTMLAttributes<HTMLSpanElement> {
  $state: 'basic' | 'focus' | 'hashTag' | 'hot';
  $size: 'xxs' | 'xs' | 's' | 'm' | 'l' | number;
  $text: string;
  $isHover?: boolean;
  $margin?: string;
}

export type PropsStyledBadge = Omit<PropsBadge, '$text'>;
