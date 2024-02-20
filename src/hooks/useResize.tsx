import { useEffect, useState } from 'react';

import { MOBILE } from '@/constants';

const useResize = () => {
  const [isMobileSize, setIsMobileSize] = useState<boolean>(
    window.innerWidth < MOBILE
  );

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setIsMobileSize(window.innerWidth < MOBILE);
      }, 500); // 500ms 디바운싱 시간 설정
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(timeoutId); // 컴포넌트가 unmount 되기 전에 timeout 정리
    };
  }, []);

  return {
    isMobileSize,
    setIsMobileSize,
  };
};

export default useResize;
