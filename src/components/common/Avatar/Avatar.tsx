import { AvatarWrapper } from './Avatar.style';
import { AvatarProps } from './Avatar.type';

/**
 *
 * @description 공통 Avatar 컴포넌트
 * @summary 사용법 1) :  <Avatar $size="mobile" /> (사용자가 설정한 프로필 사진이 없을 때)
 * @summary 사용법 2) : <Avatar $size="pc" $src="/kiwing_square_green.png" /> (사용자가 설정한 프로필 사진이 있을 땐, 이미지 경로를 기입)
 * @param $size : Avatar 컴포넌트 사이즈 ("pc" or "mobile" or "nav" or number 타입의 값 으로 기입 (단위는 rem))
 * @param $src : 이미지 경로 (선택 사항)
 * @param...props : 커스텀을 위함
 * @returns
 */

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
