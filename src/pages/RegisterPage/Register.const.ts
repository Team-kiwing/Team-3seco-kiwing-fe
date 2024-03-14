import { NICKNAMEREGEX, URLREGEX } from '@/constants/validation';

export const REGISTER_NICKNAME_VALIDATION = {
  required: true,
  pattern: NICKNAMEREGEX,
  minLength: {
    value: 2,
    message: '사용자 ID는 2자 이상 작성해주세요.',
  },
};

export const REGISTER_LINK_VALIDATION = {
  pattern: URLREGEX,
};

export const URL_ERROR_MESSAGE = 'https:// 형태로 입력해주세요.';
