import axiosErrorHandler from '@/apis/axiosErrorHandler';
import { axiosInstance } from '@/apis/axiosInstance';
import { DOMAIN } from '@/constants/api';
import {
  Question,
  QuestionCreateRequest,
  QuestionReportRequest,
  QuestionReportResponse,
  QuestionSearchRequest,
  QuestionSearchResponse,
  QuestionUpdateRequest,
} from '@/types';

/**
 * @brief 질문을 생성합니다.
 */
export const createQuestion = async ({
  content,
  answer,
  answerShareType,
  tagIds,
  bundleId,
}: QuestionCreateRequest) => {
  try {
    const res = await axiosInstance.post<Question>(DOMAIN.CREATE_QUESTION, {
      content,
      answer,
      answerShareType,
      tagIds,
      bundleId,
    });
    return res.data;
  } catch (e) {
    axiosErrorHandler(e);
    return null;
  }
};

/**
 * @brief 질문을 신고합니다.
 */
export const reportQuestion = async ({ id, reason }: QuestionReportRequest) => {
  try {
    const res = await axiosInstance.post<QuestionReportResponse>(
      DOMAIN.REPORT_QUESTION(id),
      {
        params: {
          reason,
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
 * @brief 질문을 삭제합니다.
 * @return 성공 여부를 boolean값으로 반환합니다.
 */
export const deleteQuestion = async (id: number) => {
  try {
    await axiosInstance.delete(DOMAIN.DELETE_QUESTION(id));
    return true;
  } catch (e) {
    axiosErrorHandler(e);
    return false;
  }
};

/**
 * @brief 질문을 수정합니다.
 * @todo 추후에 params에 대해 백엔드 분들과 논의가 필요합니다.
 */
export const updateQuestion = async (
  id: number,
  { content, answer, answerShareType, tagIds }: QuestionUpdateRequest
) => {
  try {
    const res = await axiosInstance.patch<Question>(
      DOMAIN.UPDATE_QUESTION(id),
      {
        content,
        answer,
        answerShareType,
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
 * @brief 질문을 검색합니다.
 */
export const searchQuestion = async ({
  keyword,
  page,
  size,
}: QuestionSearchRequest) => {
  try {
    const res = await axiosInstance.get<QuestionSearchResponse>(
      DOMAIN.SEARCH_QUESTION,
      {
        params: {
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
