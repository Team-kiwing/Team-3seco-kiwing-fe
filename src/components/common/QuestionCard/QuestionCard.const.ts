export const QuestionCardConstants = {
  MODAL_TITLE: '신고하기',
  REPORT_BADGE: '신고',
  MODAL_BUTTON_TEXT: '신고하기',
  MODAL_TEXTAREA_PLACEHOLDER: '신고 내용을 작성해주세요.',
  MAX_WIDTH: '1140',
};

export const QuestionCardModalValidation = {
  required: {
    value: true,
    message: '신고 사유를 작성해주세요.',
  },
  minLength: {
    value: 10,
    message: '신고 메세지는 10자 이상 작성해주세요.',
  },
};

// 삭제 예정
export const DUMMY = [
  {
    id: 1,
    title: '삼성 질문 리스트',
    body: '이미 이 질문이 추가된 적이 있어요!',
  },
  {
    id: 2,
    title: '카카오 질문 리스트',
  },
  {
    id: 3,
    title: '데브코스 질문 리스트',
  },
  {
    id: 4,
    title: 'LG 질문 리스트',
    body: '이미 이 질문이 추가된 적이 있어요!',
  },
];
