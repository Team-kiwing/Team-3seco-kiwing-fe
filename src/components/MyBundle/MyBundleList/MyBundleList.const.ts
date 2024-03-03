export const QUERY_KEY = 'tags';

export const MODAL = {
  TITLE: '질문 꾸러미',

  BUNDLE_NAME_LABEL: '질문 꾸러미 이름',
  BUNDLE_NAME_PLACEHOLDER: '꾸러미 이름을 입력해주세요',

  SUBMIT_BUTTON_TEXT: '추가',

  SUCCESS_NOTIFY: '꾸러미를 생성했습니다!',
  FETCH_FAIL_NOTIFY: '태그 정보를 불러오는데 실패했습니다',
};

// @TODO 제한 길이가 정해진다면 수치 업데이트
export const MyBundleModalValidation = {
  maxLength: {
    value: 20,
    message: '꾸러미 이름은 최대 20자까지 작성 가능합니다.',
  },
};
