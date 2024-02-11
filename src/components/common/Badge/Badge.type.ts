export interface PropsBadge extends React.HTMLAttributes<HTMLSpanElement> {
  $state: 'basic' | 'focus' | 'hot';
  $size: 's' | 'm' | 'l' | number;
  $isActive?: boolean;
  $hover?: boolean;
}
