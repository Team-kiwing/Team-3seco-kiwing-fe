import axios from 'axios';

import { DOMAIN, NETWORK } from '@/constants/api';
import { userDataStore } from '@/stores';
import { getItem, removeItem } from '@/utils/localStorage';

import { setAuthorization } from './axiosInterceptors';

const axiosRequestConfig = {
  baseURL: `/api`,
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
    const setAccessToken = userDataStore.getState().setAccessToken;
    const originalConfig = error.config;
    const msg = error.response.data.message;
    const status = error.response.status;

    if (status == 401) {
      if (msg == 'access token expired') {
        await axios({
          url: DOMAIN.TOKEN,
          method: 'GET',
          headers: { refreshToken: getItem('refresh-token', null) },
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
      } else if (
        msg == '리프레시 토큰이 만료되었습니다. 다시 로그인 해주세요.'
      ) {
        removeItem('refresh-token');
        window.alert('토큰이 만료되어 자동으로 로그아웃 되었습니다.');
      }
    } else if (status == 400 || status == 404 || status == 409) {
      removeItem('refresh-token');
      window.alert(msg);
    }
    return Promise.reject(error);
  }
);
