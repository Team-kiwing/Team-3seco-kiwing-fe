export const MODAL = {
  TITLE: '질문 꾸러미',

  BUNDLE_NAME_LABEL: '질문 꾸러미 이름',
  BUNDLE_NAME_PLACEHOLDER: '꾸러미 이름은 최대 100자까지 작성 가능합니다.',

  SUBMIT_BUTTON_TEXT: (mode: string) => (mode === 'add' ? '추가' : '수정'),

  SUCCESS_NOTIFY: (mode: string) =>
    mode === 'add' ? '꾸러미를 생성했습니다!' : '꾸러미를 수정했습니다!',
  ERROR_NOTIFY: (mode: string) =>
    mode === 'add'
      ? '꾸러미를 생성하는데 실패했습니다. 다시 시도해주세요.'
      : '꾸러미를 수정하는데 실패했습니다. 다시 시도해주세요.',
  FETCH_FAIL_NOTIFY: '태그 정보를 불러오는데 실패했습니다',
};

export const MyBundleModalValidation = {
  required: '꾸러미 이름을 작성해야 생성 가능합니다.',

  validate: {
    minLength: (value: string) =>
      value.trim().length >= 2 ||
      '꾸러미 이름은 최소 2글자 이상 입력해야 합니다.',
    maxLength: (value: string) =>
      value.trim().length <= 100 ||
      '꾸러미 이름은 최대 100자까지 입력 가능합니다.',
  },
};
