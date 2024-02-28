import { RiFileCopyLine, RiShareLine } from 'react-icons/ri';
import { useLocation } from 'react-router-dom';
import { useTheme } from 'styled-components';

import CircleButton from '@/components/common/CircleButton';
import IconWrapper from '@/components/common/IconWrapper';
import ShadowBox from '@/components/common/ShadowBox';
import useResize from '@/hooks/useResize';

import {
  BundleTitle,
  ClickContent,
  SharedBundleCardWrapper,
} from './SharedBundleCard.style';
import { SharedBundleCardProps } from './SharedBundleCard.type';

/**
 * @summary 사용법   <SharedBundleCard bundleName={'데브코스 면접리스트'} />
 * @description 공유된 질문꾸러미에 쓰이는 Card입니다.
 * @param bundleName 필수) 질문꾸러미의 이름입니다. (string 타입입니다.)
 * @returns
 */

const SharedBundleCard = ({ bundleName, ...props }: SharedBundleCardProps) => {
  const theme = useTheme();
  const { isMobileSize } = useResize();
  const location = useLocation();

  const currentURL = location.pathname;

  const handleCopyClipBoard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      alert('클립보드에 링크가 복사되었습니다.');
    } catch (err) {
      console.log(err);
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
                onClick={() => {
                  console.log('질문리스트 복사');
                }}
              />
              <IconWrapper
                $fillColor={theme.primary_white_text_color}
                $size={'m'}
                $hoverIconColor={theme.symbol_secondary_color}
                onClick={() => {
                  handleCopyClipBoard(currentURL);
                }}
              >
                <RiFileCopyLine />
              </IconWrapper>
            </ClickContent>
          ) : (
            <ClickContent>
              <IconWrapper
                $fillColor={theme.secondary_color}
                $size={'s'}
                $hoverIconColor={theme.symbol_secondary_color}
                onClick={() => {
                  console.log('드롭다운 !');
                }}
              >
                <RiShareLine />
              </IconWrapper>
            </ClickContent>
          )}
        </ShadowBox>
      </SharedBundleCardWrapper>
    </>
  );
};

export default SharedBundleCard;
