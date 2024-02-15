export interface PropsBadge extends React.HTMLAttributes<HTMLSpanElement> {
  $state: 'basic' | 'focus' | 'hashTag';
  $size: 's' | 'm' | 'l' | number;
  $text: string;
  $isHover?: boolean;
}

export type PropsStyledBadge = Omit<PropsBadge, '$text'>;
