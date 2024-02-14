const { VITE_CRYPTO_KEY } = import.meta.env;
import CryptoJS, { AES } from 'crypto-js';

export const aesEncrypt = (data: string): string => {
  if (!data) {
    throw new Error('암호화 데이터에 빈 문자열이 들어옵니다!!');
  } else {
    return AES.encrypt(data, VITE_CRYPTO_KEY).toString();
  }
};

export const aesDecrypt = (data: string): string => {
  if (!data) {
    throw new Error('복호화 데이터에 빈 문자열이 들어옵니다!!');
  } else {
    const bytes = AES.decrypt(data, VITE_CRYPTO_KEY);
    const decryptedData = bytes.toString(CryptoJS.enc.Utf8);

    return decryptedData;
  }
};
