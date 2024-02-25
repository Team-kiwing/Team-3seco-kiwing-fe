export const detectMobileDevice = () => {
  const agent = window.navigator.userAgent;
  const mobileRegex = [
    /Android/i,
    /iPhone/i,
    /iPad/i,
    /iPod/i,
    /BlackBerry/i,
    /Windows Phone/i,
    /Mobi/i,
  ];

  return mobileRegex.some((mobile) => agent.match(mobile));
};
