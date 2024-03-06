import axiosErrorHandler from '@/apis/axiosErrorHandler';
import { axiosInstance } from '@/apis/axiosInstance';
import { DOMAIN } from '@/constants/api';
import { ClaimsCreateRequest, ClaimsCreateResponse, Tag } from '@/types';

/**
 * @brief 태그 목록을 호출합니다.
 */
export const getTag = async () => {
  try {
    const res = await axiosInstance.get<Tag[]>(DOMAIN.TAGS, {
      useAuth: false,
    });
    return res.data;
  } catch (e) {
    axiosErrorHandler(e);
    return null;
  }
};

/**
 * @brief 건의를 생성합니다.
 */
export const createClaim = async ({ content }: ClaimsCreateRequest) => {
  try {
    const res = await axiosInstance.post<ClaimsCreateResponse>(
      DOMAIN.CREATE_CLAIM,
      {
        content,
      }
    );
    return res.data;
  } catch (e) {
    axiosErrorHandler(e);
    return null;
  }
};
