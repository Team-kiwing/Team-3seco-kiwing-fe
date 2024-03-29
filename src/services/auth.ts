import axiosErrorHandler from '@/apis/axiosErrorHandler';
import { axiosInstance } from '@/apis/axiosInstance';
import { DOMAIN } from '@/constants/api';
import { TokenRequest, TokenResponse } from '@/types';

/**
 * @brief accessToken을 재발급 받습니다.
 */
export const getAccessToken = async ({ refreshToken }: TokenRequest) => {
  try {
    const res = await axiosInstance.post<TokenResponse>(DOMAIN.TOKEN, {
      refreshToken,
      useAuth: false,
    });
    return res.data;
  } catch (e) {
    axiosErrorHandler(e);
    return null;
  }
};

/**
 * @brief 로그아웃을 진행합니다.
 * @return 성공 여부를 boolean값으로 반환합니다.
 */
export const logout = async ({ refreshToken }: TokenRequest) => {
  try {
    await axiosInstance.post(DOMAIN.LOGOUT, {
      refreshToken,
    });
    return true;
  } catch (e) {
    axiosErrorHandler(e);
    return false;
  }
};

/**
 * @brief 회원 탈퇴를 진행합니다.
 * @return 성공 여부를 boolean값으로 반환합니다.
 */
export const withdraw = async () => {
  try {
    await axiosInstance.delete(DOMAIN.WITHDRAW);
    return true;
  } catch (e) {
    axiosErrorHandler(e);
    return false;
  }
};
