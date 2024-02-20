import { useCallback, useState } from 'react';

const useToggle = (initialState: boolean) => {
  const [isChecked, setIsChecked] = useState(initialState);
  const toggle = useCallback(() => setIsChecked((state) => !state), []);

  return { isChecked, toggle };
};

export default useToggle;
