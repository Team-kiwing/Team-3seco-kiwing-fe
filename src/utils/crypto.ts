const { VITE_CRYPTO_KEY } = import.meta.env;
import CryptoJS, { AES } from 'crypto-js';

export const aesEncrypt = (data: string) => {
  return AES.encrypt(data, VITE_CRYPTO_KEY).toString();
};

export const aesDecrypt = (data: string) => {
  const bytes = AES.decrypt(data, VITE_CRYPTO_KEY);
  const decryptedData = bytes.toString(CryptoJS.enc.Utf8);

  return decryptedData;
};
