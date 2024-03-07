import { InternalAxiosRequestConfig } from 'axios';

import { userDataStore } from '@/stores';

export const setAuthorization = (config: InternalAxiosRequestConfig) => {
  if (!config.useAuth) {
    return config;
  }

  const accessToken = userDataStore.getState().accessToken;
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
    return config;
  }

  return config;
};
