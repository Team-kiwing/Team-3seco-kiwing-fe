export const handleCopyClipBoard = async (host: string, pathname: string) => {
  try {
    await navigator.clipboard.writeText(`${host}${pathname}`);
    alert('클립보드에 링크가 복사되었습니다.');
  } catch (err) {
    console.log(err);
  }
};
