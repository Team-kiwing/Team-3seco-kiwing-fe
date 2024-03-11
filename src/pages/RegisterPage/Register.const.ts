const nicknameRegex = /^[a-zA-Z0-9]*$/;

export const RegisterNicknameValidation = {
  required: true,
  pattern: nicknameRegex,
  minLength: {
    value: 2,
    message: '사용자 ID는 2자 이상 작성해주세요.',
  },
};
