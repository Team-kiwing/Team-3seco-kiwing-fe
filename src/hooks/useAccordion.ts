import { useCallback, useRef, useState } from 'react';

const useAccordion = () => {
  const parentRef = useRef<HTMLDivElement>(null);
  const childRef = useRef<HTMLDivElement>(null);

  const [isActive, setIsActive] = useState(false);

  const handleClick = useCallback(
    (event: React.MouseEvent) => {
      event.stopPropagation();
      if (parentRef.current === null || childRef.current === null) {
        return;
      }
      if (parentRef.current.clientHeight > 0 && isActive) {
        parentRef.current.style.height = '0';
      } else {
        parentRef.current.style.height = `${childRef.current.clientHeight}px`;
      }
      setIsActive(!isActive);
    },
    [isActive]
  );

  return {
    parentRef,
    childRef,
    isActive,
    setIsActive,
    handleClick,
  };
};

export default useAccordion;
