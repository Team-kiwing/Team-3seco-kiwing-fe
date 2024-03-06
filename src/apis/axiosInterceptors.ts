import { InternalAxiosRequestConfig } from 'axios';

import { accessTokenStore } from '@/stores';

export const setAuthorization = (config: InternalAxiosRequestConfig) => {
  console.log(`시작`);
  if (!config.useAuth) {
    return config;
  }

  const accessToken = accessTokenStore.getState().token;
  if (accessToken) {
    console.log(`토큰 드가자`);
    config.headers.Authorization = `Bearer ${accessToken}`;
    console.log(config);
    return config;
  }

  return config;
};
