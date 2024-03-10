export const ReportPageConstants = {
  SUBMIT_CONFIRM_MESSAGE: '제출하시겠습니까?',

  NOTIFY_REPORT_SUCCESS_MESSAGE:
    '신고를 완료하였습니다. 불편을 드려 죄송합니다.',

  REPORT_TITLE: '📄문의하기 페이지입니다.',

  TEXTAREA_PLACEHOLDER: '내용을 작성해주세요.',
  SUBMIT_BUTTON_TEXT: '제출하기',
};

export const ReportPageGuide = [
  {
    title: '🚨신고',
    text: '불쾌한 콘텐츠 혹은 부적절한 행동을 목격하셨나요? 저희에게 알려주시면 최대한 신속하게 처리됩니다.',
  },
  {
    title: '📝건의',
    text: '플랫폼을 더 나은 곳으로 만들기 위해 여러분의 의견을 기다립니다. 기능 추가, 사용성 향상, 새로운 아이디어와 같은 모든 의견을 항상 환영합니다.',
  },
  {
    title: '🛎️문의',
    text: '추가적인 도움이 필요하거나 질문이 있으신가요? 언제든지 문의해주세요. 최대한 빠르게 도와드릴게요.',
  },
];

export const ReportContentValidation = {
  required: { value: true, message: '문의 내역을 작성해주세요.' },
  minLength: {
    value: 10,
    message: '문의 내역은 10자 이상 작성해주세요.',
  },
};
