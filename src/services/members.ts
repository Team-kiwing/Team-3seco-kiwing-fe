import { AxiosError } from 'axios';

import axiosErrorHandler from '@/apis/axiosErrorHandler';
import { axiosInstance } from '@/apis/axiosInstance';
import { DOMAIN } from '@/constants/api';
import {
  ImageRequest,
  ImageResponse,
  UserInfoRequest,
  UserInfoResponse,
} from '@/types';

/**
 * @brief 사용자의 프로필 이미지를 수정합니다.
 */
export const updateProfileImage = async ({ file }: ImageRequest) => {
  try {
    const res = await axiosInstance.patch<ImageResponse>(
      DOMAIN.PROFILE_IMAGE,
      {
        file,
      },
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    );
    return res.data;
  } catch (e) {
    axiosErrorHandler(e);
    return null;
  }
};

/**
 * @brief 내 정보를 업데이트 합니다.
 */
export const patchMyInfo = async ({
  nickname,
  snsRequests,
  tagIds,
}: UserInfoRequest) => {
  try {
    const res = await axiosInstance.patch<UserInfoResponse>(DOMAIN.AUTH_USER, {
      nickname,
      snsRequests,
      tagIds,
    });
    return res.data;
  } catch (e) {
    const { message } = e as AxiosError;

    return message;
  }
};

/**
 * @brief 내 정보를 가져옵니다.
 */
export const getMyInfo = async () => {
  try {
    const res = await axiosInstance.get<UserInfoResponse>(DOMAIN.AUTH_USER);
    return res.data;
  } catch (e) {
    axiosErrorHandler(e);
    return null;
  }
};

/**
 * @brief 타 유저의 정보를 가져옵니다.
 */
export const getUserInfo = async (userId: number) => {
  try {
    const res = await axiosInstance.get<UserInfoResponse>(
      DOMAIN.AUTH_ANOTHER_USER(userId),
      { useAuth: false }
    );
    return res.data;
  } catch (e) {
    axiosErrorHandler(e);
    return null;
  }
};
