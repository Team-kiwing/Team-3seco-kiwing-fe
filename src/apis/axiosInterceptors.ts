import { InternalAxiosRequestConfig } from 'axios';

import { accessTokenStore } from '@/stores';

export const setAuthorization = (config: InternalAxiosRequestConfig) => {
  if (!config.useAuth) {
    return config;
  }

  const { token: accessToken } = accessTokenStore();
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
    return config;
  }

  return config;
};
