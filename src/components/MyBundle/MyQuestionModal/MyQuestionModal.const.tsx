export const MODAL = {
  TITLE: '질문',

  QUESTION_NAME_LABEL: '질문',
  QUESTION_ANSWER_LABEL: '답변',
  QUESTION_NAME_PLACEHOLDER: '질문을 입력해주세요',
  QUESTION_ANSWER_PLACEHOLDER: '답변을 입력해주세요',

  SUBMIT_BUTTON_TEXT: (mode: string) => (mode === 'add' ? '추가' : '수정'),

  SUCCESS_NOTIFY: '질문을 추가했습니다!',
  FETCH_FAIL_NOTIFY: '태그 정보를 불러오는데 실패했습니다',
};

// @TODO 제한 길이가 정해진다면 수치 업데이트
export const MyQuestionModalValidation = {
  maxLength: {
    value: 300,
    message: '질문은 최대 300자까지 작성 가능합니다.',
  },
};
