export const NETWORK = {
  TIMEOUT: 10000,
};

export const DOMAIN = {
  //Members
  PROFILE_IMAGE: '/members/me/profile-image',
  CHANGE_NICKNAME: '/members/me/nickname',
  AUTH_USER: '/members/me',
  AUTH_ANOTHER_USER: (userId: number) => `/members/${userId}`,

  //Auth
  TOKEN: '/auth/refresh-access-token',
  LOGOUT: '/auth/logout',
  WITHDRAW: '/auth/withdraw',

  //Question
  CREATE_QUESTION: '/questions',
  REPORT_QUESTION: (questionId: number) => `/questions/${questionId}/report`,
  DELETE_QUESTION: (questionId: number) => `/questions/${questionId}`,
  UPDATE_QUESTION: (questionId: number) => `/questions/${questionId}`,
  SEARCH_QUESTION: '/questions/search',

  //Claims
  CREATE_CLAIM: '/claims',

  //Bundle
  CREATE_BUNDLE: '/bundles',
  SCRAPE_BUNDLE: (bundleId: number) => `/bundles/${bundleId}/scrape`,
  ADD_QUESTIONS_TO_BUNDLE: '/bundles/questions',
  DELETE_QUESTIONS_FROM_BUNDLE: (bundleId: number) =>
    `/bundles/${bundleId}/questions`,
  GET_BUNDLE: (bundleId: number) => `/bundles/${bundleId}`,
  DELETE_BUNDLE: (bundleId: number) => `/bundles/${bundleId}`,
  UPDATE_BUNDLE: (bundleId: number) => `/bundles/${bundleId}`,
  REORDER_QUESTION: (bundleId: number) => `/bundles/${bundleId}/question-order`,
  REORDER_BUNDLE: `/bundles/bundle-order`,
  SEARCH_BUNDLE: '/bundles/search',
  MY_BUNDLE: '/bundles/my',

  //Tag
  TAGS: '/tags',
};
