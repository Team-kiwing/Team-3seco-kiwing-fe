import { detectMobileDevice } from './isMobile';

export const enableScrollLock = () => {
  const { body } = document;
  const isMobile = detectMobileDevice();

  if (!body.getAttribute('scrollY')) {
    const pageY = window.scrollY;

    body.setAttribute('scrollY', pageY.toString());

    body.style.overflow = 'hidden';
    body.style.position = 'fixed';
    body.style.left = '0px';
    body.style.right = '0px';
    body.style.bottom = '0px';
    body.style.top = `-${pageY}px`;
    console.log(pageY);
    if (!isMobile) {
      body.style.paddingRight = '0.4rem';
    }
  }
};

export const disableScrollLock = () => {
  const { body } = document;
  const isMobile = detectMobileDevice();

  if (body.getAttribute('scrollY')) {
    body.style.removeProperty('overflow');
    body.style.removeProperty('position');
    body.style.removeProperty('top');
    body.style.removeProperty('left');
    body.style.removeProperty('right');
    body.style.removeProperty('bottom');
    if (!isMobile) {
      body.style.removeProperty('padding-right');
    }

    window.scrollTo(0, Number(body.getAttribute('scrollY')));

    body.removeAttribute('scrollY');
  }
};
