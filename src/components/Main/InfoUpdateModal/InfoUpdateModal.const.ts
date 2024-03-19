import { NICKNAMEREGEX, URLREGEX } from '@/constants/validation';

export const MODAL = {
  TITLE: '사용자 정보 수정',

  USER_ID_LABEL: '사용자 아이디',
  TAG_LABEL: '관심 분야',
  GITHUB_LABEL: 'GitHub',
  BLOG_LABEL: '블로그',
  ETC_LABEL: '기타',
  USER_ID_PLACEHOLDER: '사용자 아이디를 입력해주세요.',
  GITHUB_PLACEHOLDER: 'GitHub 링크를 입력해주세요.',
  BLOG_PLACEHOLDER: '블로그 링크를 입력해주세요.',
  ETC_PLACEHOLDER: '기타',

  SUBMIT_BUTTON_TEXT: '정보 수정하기',

  SUCCESS_NOTIFY: '정보 수정에 성공했습니다.',
  FETCH_FAIL_NOTIFY: '태그 정보를 불러오는데 실패했습니다',

  URL_ERROR_MESSAGE: 'https:// 형태로 입력해주세요.',
};

export const MODAL_LINK_VALIDATION = {
  pattern: URLREGEX,
};

export const NICKNAME_VALIDATION = {
  required: true,
  pattern: NICKNAMEREGEX,
  minLength: {
    value: 2,
    message: '사용자 ID는 2자 이상 작성해주세요.',
  },
};
