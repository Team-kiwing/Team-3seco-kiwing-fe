export const MODAL = {
  TITLE: '사용자 정보 수정',

  NICKNAME_LABEL: '닉네임',
  TAG_LABEL: '관심 분야',
  GITHUB_LABEL: 'GitHub',
  BLOG_LABEL: '블로그',
  ETC_LABEL: '기타',

  SUBMIT_BUTTON_TEXT: '정보 수정하기',

  SUCCESS_NOTIFY: '정보 수정에 성공했습니다.',
  FETCH_FAIL_NOTIFY: '태그 정보를 불러오는데 실패했습니다',
};

const nicknameRegex = /^[a-zA-Z0-9]*$/;

export const NicknameValidation = {
  required: true,
  pattern: nicknameRegex,
  minLength: {
    value: 2,
    message: '닉네임은 2자 이상 작성해주세요.',
  },
};
