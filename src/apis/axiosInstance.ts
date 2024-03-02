import axios from 'axios';

import { DOMAIN, NETWORK } from '@/constants/api';
import { accessTokenStore } from '@/stores';

import { setAuthorization } from './axiosInterceptors';

const axiosRequestConfig = {
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: NETWORK.TIMEOUT,
  useAuth: true,
};

export const axiosInstance = axios.create(axiosRequestConfig);

axiosInstance.interceptors.request.use(setAuthorization, (error) => {
  console.error(error);
  return Promise.reject(error);
});

axiosInstance.interceptors.response.use(
  function (response) {
    return response;
  },
  async function (error) {
    const { setAccessToken } = accessTokenStore();
    const originalConfig = error.config;
    const msg = error.response.data.message;
    const status = error.response.status;

    if (status == 401) {
      if (msg == 'access token expired') {
        await axios({
          url: DOMAIN.TOKEN,
          method: 'GET',
          headers: {
            refreshToken: localStorage.getItem('refreshToken'),
          },
        })
          .then((res) => {
            setAccessToken(res.data.accessToken);

            originalConfig.headers['Authorization'] =
              'Bearer ' + res.data.accessToken;

            return axiosInstance(originalConfig);
          })
          .then(() => {
            window.location.reload();
          });
      } else if (msg == 'refresh token expired') {
        localStorage.clear();
        window.alert('토큰이 만료되어 자동으로 로그아웃 되었습니다.');
      }
    } else if (status == 400 || status == 404 || status == 409) {
      window.alert(msg);
    }
    return Promise.reject(error);
  }
);
