export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  $size: 'mobile' | 'pc' | 'nav' | number;
  $src?: string;
}
