import axiosErrorHandler from '@/apis/axiosErrorHandler';
import { axiosInstance } from '@/apis/axiosInstance';
import { DOMAIN } from '@/constants/api';
import { ImageRequest, ImageResponse, UserInfoResponse } from '@/types';

/**
 * @brief 사용자의 프로필 이미지를 수정합니다.
 */
export const updateProfileImage = async ({ file }: ImageRequest) => {
  try {
    const res = await axiosInstance.patch<ImageResponse>(DOMAIN.PROFILE_IMAGE, {
      file,
    });
    return res.data;
  } catch (e) {
    axiosErrorHandler(e);
    return null;
  }
};

/**
 * @brief 사용자의 닉네임을 수정합니다. => 아예 하나의 API에서 모든 정보를 바꿀 수 있게
 * params이랑 request body 둘 다 보내는 건 이상하다 !! TODO: 여쭤보자
 */
// export const updateNickname = async ({ nickname }: ImageRequest) => {
//     try {
//       const res = await axiosInstance.patch<ImageResponse>(DOMAIN.CHANGE_NICKNAME, {
//         file,
//       });
//       return res.data;
//     } catch (e) {
//       axiosErrorHandler(e);
//       return null;
//     }
//   };

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
