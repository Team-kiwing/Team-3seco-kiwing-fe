import { detectMobileDevice } from './isMobile';

export const enableScrollLock = () => {
  const { body } = document;
  const isMobile = detectMobileDevice();
  const hasScroll = window.innerWidth > document.documentElement.clientWidth;

  if (!body.getAttribute('scrollY')) {
    const pageY = window.scrollY;

    body.setAttribute('scrollY', pageY.toString());

    body.style.overflow = 'hidden';
    body.style.position = 'fixed';
    body.style.left = '0px';
    body.style.right = '0px';
    body.style.bottom = '0px';
    body.style.top = `-${pageY}px`;
    if (!isMobile) {
      if (hasScroll) {
        body.style.paddingRight = '0.4rem';
      }
    }
  }
};

export const disableScrollLock = () => {
  const { body } = document;

  if (body.getAttribute('scrollY')) {
    body.style.removeProperty('overflow');
    body.style.removeProperty('position');
    body.style.removeProperty('top');
    body.style.removeProperty('left');
    body.style.removeProperty('right');
    body.style.removeProperty('bottom');
    body.style.removeProperty('padding-right');

    window.scrollTo(0, Number(body.getAttribute('scrollY')));

    body.removeAttribute('scrollY');
  }
};
