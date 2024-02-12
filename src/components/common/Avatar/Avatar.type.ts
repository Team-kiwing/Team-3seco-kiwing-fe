export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  $size: 'mobile' | 'pc';
  $src?: string;
}
