const { VITE_CRYPTO_KEY } = import.meta.env;
import CryptoJS, { AES } from 'crypto-js';

export const aesEncrypt = (data: string) => {
  if (!data) throw new Error('데이터에 빈 문자열이 들어옵니다!!');
  return AES.encrypt(data, VITE_CRYPTO_KEY).toString();
};

export const aesDecrypt = (data: string) => {
  if (!data) throw new Error('데이터에 빈 문자열이 들어옵니다!!');
  const bytes = AES.decrypt(data, VITE_CRYPTO_KEY);
  const decryptedData = bytes.toString(CryptoJS.enc.Utf8);

  return decryptedData;
};
