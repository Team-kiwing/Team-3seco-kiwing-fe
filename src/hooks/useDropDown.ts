import { useState } from 'react';

const useDropDown = (triggerId: string) => {
  const [isShow, setIsShow] = useState(false);

  const openDropDown = (e: React.MouseEvent) => {
    if ((e.target as Element).id === triggerId) {
      setIsShow(true);
    }
  };

  const closeDropDown = (e: Event) => {
    if ((e.target as Element).id !== triggerId) {
      setIsShow(false);
    }
  };

  return {
    triggerId,
    isShow,
    setIsShow,
    openDropDown,
    closeDropDown,
  };
};

export default useDropDown;
