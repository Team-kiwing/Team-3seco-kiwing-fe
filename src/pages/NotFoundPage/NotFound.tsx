import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from 'styled-components';

import Button from '@/components/common/Button';
import EasterEgg from '@/components/common/EasterEgg';
import ShadowBox from '@/components/common/ShadowBox';
import { FONT_SEMI_BOLD } from '@/constants';
import { PATH } from '@/constants/router';

import { NotFoundTextConstants } from './NotFound.const';
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
    navigator(PATH.MAIN);
  };

  const handleClickError = () => {
    navigator(PATH.REPORT);
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
            <PTagText>{NotFoundTextConstants.EASTER_EGG_FIND_TEXT}</PTagText>
            <PTagText>{NotFoundTextConstants.EASTER_EGG_CHEER_TEXT}</PTagText>
          </ShadowBox>
        </EasterEggText>

        {showEasterEgg && <EasterEgg />}
        <NotFoundLogoImage
          src="/kiwing_circle_green.png"
          alt={NotFoundTextConstants.IMAGE_ALT_TEXT}
          onClick={handleLogoClick}
        />
        <NotFoundText>
          {NotFoundTextConstants.NOT_FOUND_SORRY_TEXT}
        </NotFoundText>
        <NotFoundText>
          {NotFoundTextConstants.NOT_FOUND_ERROR_TEXT}
        </NotFoundText>
        <NotFoundButtonWrap>
          <Button
            style={{ fontWeight: `${FONT_SEMI_BOLD}` }}
            onClick={handleClickError}
            text={NotFoundTextConstants.TO_REPORT_BUTTON_TEXT}
            backgroundColor={theme.error_red}
            hoverBackgroundColor={`${theme.error_red}70`}
          />
          <Button
            onClick={handleClickHome}
            text={NotFoundTextConstants.TO_HOME_BUTTON_TEXT}
          />
        </NotFoundButtonWrap>
      </NotFoundLayout>
    </>
  );
};

export default NotFound;
