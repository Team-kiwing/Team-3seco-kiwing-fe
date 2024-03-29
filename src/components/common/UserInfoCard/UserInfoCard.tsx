import Avatar from '@components/common/Avatar/Avatar';
import Badge from '@components/common/Badge/Badge';
import IconWrapper from '@components/common/IconWrapper/IconWrapper';
import ShadowBox from '@components/common/ShadowBox/ShadowBox';
import { IoIosLink } from 'react-icons/io';
import { PiNotePencil, PiSignOut } from 'react-icons/pi';
import { useTheme } from 'styled-components';

import useResize from '@/hooks/useResize';
import { getItem } from '@/utils/localStorage';

import { useInfoUpdateModal, useLogout } from './UserInfoCard.hook';
import {
  NoLinks,
  NoTags,
  UserInfoBadgeWrapper,
  UserInfoContentsWrapper,
  UserInfoIconWrapper,
  UserInfoLink,
  UserInfoLinkWrapper,
  UserInfoNickname,
  UserInfoNicknameBadgeWrapper,
  UserInfoWrapper,
} from './UserInfoCard.style';
import { UserInfoCardProps } from './UserInfoCard.type';

/**
 *
 * @description UserInfoCard 컴포넌트
 * @summary 사용법 :
 * <UserInfoCard
      userName="JaehyunGround"
      tags={['프론트엔드', '백엔드', '네트워크']}
      links={[
        'https://github.com/Team-kiwing',
        'https://velog.io/@jaehyun_ground/posts',
        'https://github.com/Team-kiwing',
      ]}
    />
 * @summary 데이터 형식이 어떻게 될 지 몰라서, 임시로 구현했고 API 명세서가 나온 후 props 수정 작업 진행하겠습니다 !

 * @param userImage : 선택 | string 타입. 유저의 프로필 사진 src를 받습니다.
 * @param userName : 필수 | string 타입. 유저의 닉네임을 받습니다.
 * @param tags : 선택 | string[] 타입. 유저가 선택한 태그들을 배열 형태로 받습니다.
 * @param links : 선택 | string[] 타입. 유저가 등록한 링크들을 배열 형태로 받습니다.
 * @returns
 */

const UserInfoCard = ({
  userImage,
  userName,
  tags = [],
  links = [],
  rightButtonOn = false,
}: UserInfoCardProps) => {
  const theme = useTheme();

  const { isMobileSize } = useResize();
  const { handleInfoUpdateModal } = useInfoUpdateModal();
  const { mutate: logout } = useLogout();
  const storedRefreshToken = getItem('refresh-token', null);

  const handleLogOut = () => {
    if (confirm('로그아웃 하시겠습니까?')) {
      if (storedRefreshToken !== null) {
        logout({ refreshToken: storedRefreshToken });
      }
    }
  };

  return (
    <ShadowBox
      width={isMobileSize ? '90%' : '100%'}
      height={'100%'}
      style={{ minWidth: '260px', margin: '0 auto' }}
    >
      <UserInfoWrapper>
        <Avatar
          $size={isMobileSize ? 'mobile' : 'pc'}
          $src={userImage}
        />
        <UserInfoContentsWrapper>
          <UserInfoNicknameBadgeWrapper>
            <UserInfoNickname>{userName}</UserInfoNickname>
            <UserInfoBadgeWrapper>
              {tags.length !== 0 ? (
                tags.map((tag, index) => (
                  <Badge
                    $state={'basic'}
                    $size={isMobileSize ? 'xxs' : 'xs'}
                    $text={tag.name}
                    style={{
                      backgroundColor: `${theme.symbol_secondary_color}`,
                      cursor: 'default',
                    }}
                    key={index}
                  />
                ))
              ) : (
                <NoTags>관심 분야가 없습니다.</NoTags>
              )}
            </UserInfoBadgeWrapper>
          </UserInfoNicknameBadgeWrapper>
          <UserInfoLinkWrapper>
            {links.length !== 0 ? (
              links.map(
                (link, index) =>
                  link.url && (
                    <UserInfoLink key={index}>
                      <IconWrapper
                        $size={isMobileSize ? 'xss' : 'xs'}
                        style={{ cursor: 'default' }}
                      >
                        <IoIosLink />
                      </IconWrapper>
                      <a
                        href={link.url}
                        target="_blank"
                      >
                        {link.url}
                      </a>
                    </UserInfoLink>
                  )
              )
            ) : (
              <NoLinks>등록된 링크가 없습니다.</NoLinks>
            )}
          </UserInfoLinkWrapper>
        </UserInfoContentsWrapper>
        {rightButtonOn && (
          <UserInfoIconWrapper>
            <IconWrapper
              $size={isMobileSize ? 'xs' : 's'}
              onClick={handleInfoUpdateModal}
            >
              <PiNotePencil />
            </IconWrapper>
            <IconWrapper
              $size={isMobileSize ? 'xs' : 's'}
              onClick={handleLogOut}
            >
              <PiSignOut />
            </IconWrapper>
          </UserInfoIconWrapper>
        )}
      </UserInfoWrapper>
    </ShadowBox>
  );
};

export default UserInfoCard;
