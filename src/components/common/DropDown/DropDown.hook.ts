/* eslint-disable consistent-return */
import { useEffect, useRef } from 'react';

// 모바일 환경을 고려하여 touchstart를 추가한다.
const events = ['mousedown', 'touchstart'];

const useClickAway = (handler: (e: Event) => void) => {
  const ref = useRef(null);
  const savedHandler = useRef(handler);

  // handler함수가 바뀌면 저장한다.
  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    const element = ref.current as HTMLElement | null;
    if (!element) return;

    const handleEvent = (e: Event) => {
      if (element.contains(e.target as Node)) {
        return;
      }

      if (
        e.target instanceof HTMLElement &&
        e.target.classList.contains('sc-ksdxTZ')
      ) {
        return;
      }

      savedHandler.current(e);
    };

    events.forEach((eventName) => {
      document.addEventListener(eventName, handleEvent);
    });

    return () => {
      events.forEach((eventName) => {
        document.removeEventListener(eventName, handleEvent);
      });
    };
  }, [ref]);

  return ref;
};

export default useClickAway;
