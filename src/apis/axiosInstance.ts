import * as Sentry from '@sentry/react';
import axios from 'axios';

import { NETWORK } from '@/constants/api';
import { notify } from '@/hooks/toast';
import { getAccessToken } from '@/services/auth';
import { userDataStore } from '@/stores';
import { getItem, removeItem } from '@/utils/localStorage';

import { setRequestAuthorization } from './axiosInterceptors';

const axiosRequestConfig = {
  baseURL: `/api`,
  timeout: NETWORK.TIMEOUT,
  useAuth: true,
};

export const axiosInstance = axios.create(axiosRequestConfig);

axiosInstance.interceptors.request.use(setRequestAuthorization, (error) => {
  console.error(error);
  return Promise.reject(error);
});

axiosInstance.interceptors.response.use(
  function (response) {
    return response;
  },
  async function (error) {
    const setAccessToken = userDataStore.getState().setAccessToken;
    const originalConfig = error.config;
    const msg = error.response.data.code;
    const status = error.response.status;
    const storedToken = getItem('refresh-token', null);

    if (status === 401) {
      if (msg === 'ACCESS_TOKEN_EXPIRED') {
        try {
          const res = await getAccessToken({ refreshToken: storedToken });
          if (res) {
            setAccessToken(res.accessToken);

            originalConfig.headers['Authorization'] =
              'Bearer ' + res.accessToken;

            return axiosInstance(originalConfig);
          } else {
            throw new Error('응답값이 없어요!');
          }
        } catch (error) {
          console.error(error);
        }
      } else {
        removeItem('refresh-token');
        notify({
          text: '자동으로 로그아웃 되었습니다. 다시 로그인 해주세요.',
          type: 'error',
        });
      }
    } else if (status === 400 || status === 404 || status === 409) {
      console.error(msg);
      notify({
        text: '에러가 발생했어요. 새로고침하거나 관리자에게 문의해주세요.',
        type: 'error',
      });
    }
    Sentry.captureException(error);
    return Promise.reject(error);
  }
);
