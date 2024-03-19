export const MODAL = {
  TITLE: '질문',

  QUESTION_NAME_LABEL: '질문',
  QUESTION_ANSWER_LABEL: '답변',
  QUESTION_NAME_PLACEHOLDER:
    '질문은 최대 300자까지 작성 가능하며, 답변 공개 여부와 상관없이 질문 허브에 등록됩니다.',
  QUESTION_ANSWER_PLACEHOLDER: '답변은 최대 1500자 까지 작성 가능합니다.',

  SUBMIT_BUTTON_TEXT: (mode: string) => (mode === 'add' ? '추가' : '수정'),

  SUCCESS_NOTIFY: (mode: string) =>
    mode === 'add' ? '질문을 추가했습니다!' : '질문을 수정했습니다!',
  ERROR_NOTIFY: (mode: string) =>
    mode === 'add'
      ? '질문을 추가하는데 실패했습니다. 다시 시도해주세요.'
      : '질문을 수정하는데 실패했습니다. 다시 시도해주세요.',
  FETCH_FAIL_NOTIFY: '태그 정보를 불러오는데 실패했습니다',
};

export const QuestionValidation = {
  required: '질문 이름을 작성해야 생성 가능합니다.',
  maxLength: {
    value: 300,
    message: '질문은 최대 300자까지 작성 가능합니다.',
  },
  validate: (value: string) =>
    value.trim().length >= 1 || '질문 이름을 작성해야 생성 가능합니다.',
};

export const AnswerValidation = {
  maxLength: {
    value: 1500,
    message: '답변은 최대 1500자까지 작성 가능합니다.',
  },
};
