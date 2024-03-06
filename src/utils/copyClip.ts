export const handleCopyClipBoard = async (host: string, pathname: string) => {
  try {
    await navigator.clipboard.writeText(`${host}${pathname}`);
  } catch (err) {
    console.log(err);
  }
};
