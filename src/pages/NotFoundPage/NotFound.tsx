import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from 'styled-components';

import Button from '@/components/common/Button';
import EasterEgg from '@/components/common/EasterEgg';
import ShadowBox from '@/components/common/ShadowBox';

import {
  EasterEggText,
  NotFoundButtonWrap,
  NotFoundLayout,
  NotFoundLogoImage,
  NotFoundText,
  PTagText,
} from './NotFound.style';

const NotFound = () => {
  const navigator = useNavigate();
  const theme = useTheme();
  const [showEasterEgg, setShowEasterEgg] = useState(false);

  const handleClickHome = () => {
    navigator('/');
  };

  const handleClickError = () => {
    navigator('/report');
  };

  const handleLogoClick = () => {
    setShowEasterEgg(true);
    setTimeout(() => {
      setShowEasterEgg(false);
    }, 7000);
  };

  return (
    <>
      <NotFoundLayout>
        <EasterEggText $isShow={showEasterEgg}>
          <ShadowBox
            style={{ flexDirection: 'column', padding: '0 2rem' }}
            width="auto"
            height="auto"
          >
            <PTagText>키윙 이스터 에그를 찾으셨네요!</PTagText>
            <PTagText>여러분의 멋진 삶을 응원합니다.</PTagText>
          </ShadowBox>
        </EasterEggText>

        {showEasterEgg && <EasterEgg />}
        <NotFoundLogoImage
          src="/kiwing_square_green.png"
          alt="키윙 로고"
          onClick={handleLogoClick}
        />
        <NotFoundText>요청하신 페이지를 찾지 못했어요</NotFoundText>
        <NotFoundButtonWrap>
          <Button
            onClick={handleClickHome}
            text="홈으로"
          />
          <Button
            onClick={handleClickError}
            text="오류 신고하기"
            backgroundColor={theme.error_red}
            hoverBackgroundColor={theme.hotBadge_color}
          />
        </NotFoundButtonWrap>
      </NotFoundLayout>
    </>
  );
};

export default NotFound;
