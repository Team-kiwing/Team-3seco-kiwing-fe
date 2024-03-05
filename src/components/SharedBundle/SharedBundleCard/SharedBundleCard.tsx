import { RiFileCopyLine, RiShareLine } from 'react-icons/ri';
import { useLocation } from 'react-router-dom';
import { useTheme } from 'styled-components';

import CircleButton from '@/components/common/CircleButton';
import IconWrapper from '@/components/common/IconWrapper';
import ShadowBox from '@/components/common/ShadowBox';
import { notify } from '@/hooks/toast';
import useDropDown from '@/hooks/useDropDown';
import useResize from '@/hooks/useResize';
import { scrapeBundle } from '@/services/bundles';
import { handleCopyClipBoard } from '@/utils/copyClip';

import SharedBundleDropDown from '../SharedBundleDropDown';
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
  const { triggerId, isShow, setIsShow, toggleDropDown, closeDropDown } =
    useDropDown('sharedBundle-dropdown');

  const toastClipBoard = () => {
    notify({
      type: 'success',
      text: '클립보드에 링크가 복사되었습니다.',
    });
  };

  const toastAddBundle = () => {
    notify({
      type: 'success',
      text: '꾸러미가 스크랩되었습니다.',
    });
  };

  const toastErrorAddBundle = () => {
    notify({
      type: 'error',
      text: '꾸러미 스크랩을 실패하였습니다.',
    });
  };

  const handleOpenDropdown = (e: React.MouseEvent) => {
    toggleDropDown(e);
  };

  const handleScrapBundle = async () => {
    const result = await scrapeBundle(bundleId);
    if (result) {
      toastAddBundle();
    } else {
      toastErrorAddBundle();
    }
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
              <CircleButton
                isBackgroundWhite={true}
                onClick={() => handleScrapBundle()}
              />
              <IconWrapper
                $fillColor={theme.primary_white_text_color}
                $size={'m'}
                $hoverIconColor={theme.symbol_secondary_color}
                onClick={() => {
                  handleCopyClipBoard(SERVICE_URL, CURRENT_URL);
                  toastClipBoard();
                }}
              >
                <RiFileCopyLine id={triggerId} />
              </IconWrapper>
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
                direction="bottom-left"
              />
            </ClickContent>
          )}
        </ShadowBox>
      </SharedBundleCardWrapper>
    </>
  );
};

export default SharedBundleCard;
