import { notify } from '@/hooks/toast';

const SUCCESS_NOTIFY = '클립보드에 링크가 복사되었습니다.';
const FAILED_NOTIFY = '복사에 실패했어요. 관리자에게 문의해주세요.';
export const handleCopyClipBoard = async (host: string, pathname: string) => {
  try {
    await navigator.clipboard.writeText(`${host}${pathname}`);
    notify({ type: 'success', text: SUCCESS_NOTIFY });
  } catch (err) {
    notify({ type: 'error', text: FAILED_NOTIFY });
  }
};
