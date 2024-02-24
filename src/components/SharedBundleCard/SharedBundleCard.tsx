import { useEffect, useState } from 'react';
import { RiFileCopyLine, RiShareLine } from 'react-icons/ri';
import { useTheme } from 'styled-components';

import CircleButton from '@/components/common/CircleButton';
import IconWrapper from '@/components/common/IconWrapper';
import ShadowBox from '@/components/common/ShadowBox';
import { MOBILE } from '@/constants';

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
    <>
      <SharedBundleCardWrapper {...props}>
        <ShadowBox
          style={{
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          isActive={true}
          width="100%"
          height="100%"
        >
          <BundleTitle>{bundleName}</BundleTitle>
          {viewportWidth > MOBILE ? (
            <ClickContent>
              <CircleButton
                isBackgroundWhite={true}
                onClick={() => {
                  console.log('질문리스트 복사');
                }}
              />
              <IconWrapper
                $fillColor={theme.secondary_color}
                $size={'m'}
                $hoverIconColor={theme.symbol_secondary_color}
                onClick={() => {
                  console.log('링크 복사!');
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
