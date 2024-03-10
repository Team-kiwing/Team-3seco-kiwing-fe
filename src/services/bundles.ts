import axiosErrorHandler from '@/apis/axiosErrorHandler';
import { axiosInstance } from '@/apis/axiosInstance';
import { DOMAIN } from '@/constants/api';
import {
  AddQuestionsToBundlesRequest,
  Bundle,
  BundleDetailRequest,
  BundleReorderRequest,
  BundlesBasic,
  BundlesCreateRequest,
  BundleSearchRequest,
  BundleSearchResponse,
  BundlesUpdateRequest,
  BundlesUpdateResponse,
} from '@/types';

/**
 * @brief 꾸러미를 생성합니다.
 */
export const createBundle = async ({
  name,
  shareType,
  tagIds,
}: BundlesCreateRequest) => {
  try {
    const res = await axiosInstance.post<Bundle>(DOMAIN.CREATE_BUNDLE, {
      name,
      shareType,
      tagIds,
    });
    return res.data;
  } catch (e) {
    axiosErrorHandler(e);
    return null;
  }
};

/**
 * @brief 꾸러미를 스크랩합니다.
 * @return 성공 여부를 boolean값으로 반환합니다.
 */
export const scrapeBundle = async (bundleId: number) => {
  try {
    await axiosInstance.post(DOMAIN.SCRAPE_BUNDLE(bundleId));
    return true;
  } catch (e) {
    axiosErrorHandler(e);
    return false;
  }
};

/**
 * @brief 선택한 질문들을 꾸러미에 추가합니다.
 * @return 성공 여부를 boolean값으로 반환합니다.
 */

export const createQuestionsToBundle = async ({
  bundleIds,
  questionIds,
}: AddQuestionsToBundlesRequest) => {
  try {
    await axiosInstance.post(DOMAIN.ADD_QUESTIONS_TO_BUNDLE, {
      bundleIds,
      questionIds,
    });
    return true;
  } catch (e) {
    axiosErrorHandler(e);
    return false;
  }
};

/**
 * @brief 선택한 질문들을 꾸러미에서 삭제합니다.
 * @return 성공 여부를 boolean값으로 반환합니다.
 */

export const deleteQuestionsFromBundle = async (
  bundleId: number,
  questionIds: number[]
) => {
  try {
    await axiosInstance.delete(DOMAIN.DELETE_QUESTIONS_FROM_BUNDLE(bundleId), {
      data: { questionIds },
    });
    return true;
  } catch (e) {
    axiosErrorHandler(e);
    return false;
  }
};

/**
 * @brief 꾸러미의 정보를 상세 조회합니다.
 */

export const getBundleDetail = async ({
  bundleId,
  showOnlyMyQuestions = false,
}: BundleDetailRequest) => {
  try {
    const res = await axiosInstance.get<Bundle>(DOMAIN.GET_BUNDLE(bundleId), {
      params: {
        showOnlyMyQuestions,
      },
    });
    return res.data;
  } catch (e) {
    axiosErrorHandler(e);
    return null;
  }
};

/**
 * @brief 꾸러미를 삭제합니다.
 * @return 성공 여부를 boolean값으로 반환합니다.
 */
export const deleteBundle = async (bundleId: number) => {
  try {
    await axiosInstance.delete(DOMAIN.DELETE_BUNDLE(bundleId));
    return true;
  } catch (e) {
    axiosErrorHandler(e);
    return false;
  }
};

/**
 * @brief 꾸러미를 수정합니다.
 */
export const updateBundle = async ({
  bundleId,
  name,
  shareType,
  tagIds,
}: BundlesUpdateRequest) => {
  try {
    const res = await axiosInstance.patch<BundlesUpdateResponse>(
      DOMAIN.UPDATE_BUNDLE(bundleId),
      {
        name,
        shareType,
        tagIds,
      }
    );
    return res.data;
  } catch (e) {
    axiosErrorHandler(e);
    return null;
  }
};

/**
 * @brief 꾸러미 내에서 질문 순서를 변경합니다.
 * @return 성공 여부를 boolean값으로 반환합니다.
 */
export const reorderQuestion = async ({
  bundleId,
  questionIds,
}: BundleReorderRequest) => {
  try {
    await axiosInstance.patch(DOMAIN.REORDER_BUNDLE(bundleId), {
      questionOrder: questionIds,
    });
    return true;
  } catch (e) {
    axiosErrorHandler(e);
    return false;
  }
};

/**
 * @brief 꾸러미를 검색합니다.
 */
export const searchBundles = async ({
  page,
  size,
  sortingType,
  tagIds,
  keyword,
}: BundleSearchRequest) => {
  try {
    const res = await axiosInstance.get<BundleSearchResponse>(
      DOMAIN.SEARCH_BUNDLE,
      {
        params: {
          sortingType,
          tagIds,
          keyword,
          page,
          size,
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
 * @brief 내 꾸러미 목록을 조회합니다.
 * @todo 추후에 request type이 변경될 수 있습니다.
 */
export const getMyBundles = async (sortingType: string) => {
  try {
    const res = await axiosInstance.get<BundlesBasic[]>(DOMAIN.MY_BUNDLE, {
      params: {
        sortingType,
      },
    });
    return res.data;
  } catch (e) {
    axiosErrorHandler(e);
    return null;
  }
};
