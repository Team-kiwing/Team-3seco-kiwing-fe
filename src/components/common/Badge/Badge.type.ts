export interface PropsBadge extends React.HTMLAttributes<HTMLSpanElement> {
  $state: 'basic' | 'focus';
  $size: 's' | 'm' | 'l' | number;
  $isActive?: boolean;
  $hover?: boolean;
}
