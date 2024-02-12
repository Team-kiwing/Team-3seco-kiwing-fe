import { AvatarWrapper } from './Avatar.style';
import { AvatarProps } from './Avatar.type';

const Avatar = ({ $size, $src, ...props }: AvatarProps) => {
  return (
    <AvatarWrapper
      $size={$size}
      $src={$src}
      {...props}
    />
  );
};

export default Avatar;
