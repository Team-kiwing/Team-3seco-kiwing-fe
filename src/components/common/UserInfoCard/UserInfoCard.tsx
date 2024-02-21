import { useEffect, useState } from 'react';
import { IoIosLink } from 'react-icons/io';
import { PiNotePencil, PiSignOut } from 'react-icons/pi';

import { MOBILE } from '@/constants';

import Avatar from '../Avatar';
import Badge from '../Badge';
import IconWrapper from '../IconWrapper';
import ShadowBox from '../ShadowBox';
import {
  UserInfoBadgeWrapper,
  UserInfoContentsWrapper,
  UserInfoIconWrapper,
  UserInfoLink,
  UserInfoLinkWrapper,
  UserInfoNickname,
  UserInfoNicknameBadgeWrapper,
  UserInfoWrapper,
} from './UserInfoCard.style';

/**
 *
 * @description UserInfoCard 컴포넌트
 * @summary 사용법 :
 * <UserInfoCard />
 * 데이터 형식이 어떻게 될 지 몰라서, API 명세서가 나온 후 props 작업 진행 할 예정입니다 !
 * @returns
 */

// TODO: API 명세서 나오면 데이터 형식에 맞게 props 설정하기
const UserInfoCard = () => {
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  let timer = null;

  useEffect(() => {
    const resizeViewportWidth = () => {
      clearTimeout(timer!);
      timer = setTimeout(() => {
        setViewportWidth(window.innerWidth);
      }, 200);
    };

    window.addEventListener('resize', resizeViewportWidth);

    return () => {
      window.removeEventListener('resize', resizeViewportWidth);
    };
  }, []);

  return (
    <ShadowBox
      width={viewportWidth <= MOBILE ? '90%' : '80%'}
      height={'100%'}
      style={{ minWidth: '280px', margin: '0 auto' }}
    >
      <UserInfoWrapper>
        <Avatar $size={viewportWidth <= MOBILE ? 'mobile' : 'pc'} />
        <UserInfoContentsWrapper>
          <UserInfoNicknameBadgeWrapper>
            <UserInfoNickname>닉네임</UserInfoNickname>
            <UserInfoBadgeWrapper>
              <Badge
                $state={'basic'}
                $size={viewportWidth <= MOBILE ? 'xxs' : 'xs'}
                $text={'프론트엔드'}
                style={{ backgroundColor: '#009c4d' }}
              />
              <Badge
                $state={'basic'}
                $size={viewportWidth <= MOBILE ? 'xxs' : 'xs'}
                $text={'프론트엔드'}
                style={{ backgroundColor: '#009c4d' }}
              />
              <Badge
                $state={'basic'}
                $size={viewportWidth <= MOBILE ? 'xxs' : 'xs'}
                $text={'프론트엔드'}
                style={{ backgroundColor: '#009c4d' }}
              />
            </UserInfoBadgeWrapper>
          </UserInfoNicknameBadgeWrapper>
          <UserInfoLinkWrapper>
            <UserInfoLink>
              <IconWrapper $size={viewportWidth <= MOBILE ? 'xss' : 'xs'}>
                <IoIosLink />
              </IconWrapper>
              <a href="https://github.com/Team-kiwing">
                https://github.com/Team-kiwing
              </a>
            </UserInfoLink>
            <UserInfoLink>
              <IconWrapper $size={viewportWidth <= MOBILE ? 'xss' : 'xs'}>
                <IoIosLink />
              </IconWrapper>
              <a href="https://velog.io/@jaehyun_ground/posts">
                https://velog.io/@jaehyun_ground/posts
              </a>
            </UserInfoLink>
            <UserInfoLink>
              <IconWrapper $size={viewportWidth <= MOBILE ? 'xss' : 'xs'}>
                <IoIosLink />
              </IconWrapper>
              <a href="https://github.com/Team-kiwing">
                https://github.com/Team-kiwing
              </a>
            </UserInfoLink>
          </UserInfoLinkWrapper>
        </UserInfoContentsWrapper>
        <UserInfoIconWrapper>
          <IconWrapper
            $size={viewportWidth <= MOBILE ? 'xs' : 's'}
            onClick={() => alert('회원 정보 수정 모달 띄우는 작업 해야함 !')}
          >
            <PiNotePencil />
          </IconWrapper>
          <IconWrapper
            $size={viewportWidth <= MOBILE ? 'xs' : 's'}
            onClick={() => alert('로그아웃 작업 해야함 !')}
          >
            <PiSignOut />
          </IconWrapper>
        </UserInfoIconWrapper>
      </UserInfoWrapper>
    </ShadowBox>
  );
};

export default UserInfoCard;
