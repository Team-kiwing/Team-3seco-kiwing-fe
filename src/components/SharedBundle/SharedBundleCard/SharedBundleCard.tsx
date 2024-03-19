import { useState } from 'react';
import { RiFileCopyLine, RiShareLine } from 'react-icons/ri';
import { useLocation } from 'react-router-dom';
import { Tooltip } from 'react-tooltip';
import { useTheme } from 'styled-components';

import CircleButton from '@/components/common/CircleButton';
import IconWrapper from '@/components/common/IconWrapper';
import ShadowBox from '@/components/common/ShadowBox';
import { BORDER_WEB } from '@/constants';
import { notify } from '@/hooks/toast';
import useDropDown from '@/hooks/useDropDown';
import useResize from '@/hooks/useResize';
import { scrapeBundle } from '@/services/bundles';
import { Direction } from '@/types/dropdown';
import { handleCopyClipBoard } from '@/utils/copyClip';

import SharedBundleDropDown from '../SharedBundleDropDown';
import { SHARED_BUNDLE_CARD } from './SharedBundleCard.const';
import {
  BundleTitle,
  ClickContent,
  SharedBundleCardWrapper,
} from './SharedBundleCard.style';
import { SharedBundleCardProps } from './SharedBundleCard.type';

/**
 * @summary 사용법   <SharedBundleCard bundleName={'데브코스 면접리스트'} />
 * @description 공유된 질문꾸러미에 쓰이는 Card입니다.
 * @param bundleName 필수) 꾸러미의 이름입니다. (string 타입입니다.)
 * @param bundleId 필수) 꾸러미의 고유한 id값입니다. (number 타입.)
 * @returns
 */

const SharedBundleCard = ({
  bundleName,
  bundleId,
  ...props
}: SharedBundleCardProps) => {
  const theme = useTheme();
  const { isMobileSize } = useResize();
  const location = useLocation();
  const SERVICE_URL = window.location.host;
  const CURRENT_URL = location.pathname;
  const [direction, setDirection] = useState<Direction>('bottom-left');
  const { triggerId, isShow, setIsShow, toggleDropDown, closeDropDown } =
    useDropDown('sharedBundle-dropdown');

  const handleScrapBundle = async () => {
    const result = await scrapeBundle(bundleId);
    if (result) {
      notify({
        type: 'success',
        text: SHARED_BUNDLE_CARD.SUCCESS_SCRAPE_NOTIFY,
      });
    } else {
      notify({
        type: 'error',
        text: SHARED_BUNDLE_CARD.FAIL_SCRAPE_NOTIFY,
      });
    }
  };

  const handleOpenDropdown = (e: React.MouseEvent) => {
    if ((e.target as Element).id === triggerId) {
      if (e.clientY > window.innerHeight / 2) {
        setDirection('top-left');
      } else {
        setDirection('bottom-left');
      }
    }

    toggleDropDown(e);
  };

  return (
    <>
      <SharedBundleCardWrapper {...props}>
        <ShadowBox
          style={{
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          isActive={true}
          width="100%"
          height="100%"
        >
          <BundleTitle>{bundleName}</BundleTitle>
          {!isMobileSize ? (
            <ClickContent>
              <a
                data-tooltip-id="add-bundle"
                data-tooltip-content="현재 보고 계신 꾸러미를 내 꾸러미로 추가합니다!"
              >
                <CircleButton
                  isBackgroundWhite={true}
                  onClick={() => handleScrapBundle()}
                />
                <Tooltip
                  id="add-bundle"
                  place="top"
                  style={{
                    backgroundColor: `${theme.symbol_secondary_color}`,
                    borderRadius: `${BORDER_WEB}rem`,
                  }}
                />
              </a>
              <a
                data-tooltip-id="copy-bundle"
                data-tooltip-content="현재 보고있는 꾸러미의 URL 주소를 복사합니다!"
              >
                <IconWrapper
                  $fillColor={theme.primary_white_text_color}
                  $size={'m'}
                  $hoverIconColor={theme.symbol_secondary_color}
                  onClick={() => {
                    handleCopyClipBoard(SERVICE_URL, CURRENT_URL);
                  }}
                >
                  <RiFileCopyLine id={triggerId} />
                </IconWrapper>
                <Tooltip
                  id="copy-bundle"
                  place="top"
                  style={{
                    backgroundColor: `${theme.symbol_secondary_color}`,
                    borderRadius: `${BORDER_WEB}rem`,
                  }}
                />
              </a>
            </ClickContent>
          ) : (
            <ClickContent>
              <IconWrapper
                $fillColor={theme.secondary_color}
                $size={'m'}
                $hoverIconColor={theme.symbol_secondary_color}
                $isBackground={true}
                onClick={handleOpenDropdown}
                id={triggerId}
                style={{
                  position: 'relative',
                }}
              >
                <RiShareLine id={triggerId} />
              </IconWrapper>
              <SharedBundleDropDown
                bundleId={bundleId}
                isShow={isShow}
                setIsShow={setIsShow}
                closeDropDown={closeDropDown}
                onAddBundle={handleScrapBundle}
                direction={direction}
              />
            </ClickContent>
          )}
        </ShadowBox>
      </SharedBundleCardWrapper>
    </>
  );
};

export default SharedBundleCard;
