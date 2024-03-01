export const NETWORK = {
  TIMEOUT: 10000,
};

export const DOMAIN = {
  //User
  PROFILE_IMAGE: '/members/me/profile-image',
  CHANGE_NICKNAME: '/members/me/nickname',
  AUTH_USER: '/members/me',

  //Auth
  TOKEN: '/auth/refresh-access-token',
  LOGOUT: '/auth/logout',
  WITHDRAW: '/auth/withdraw',

  //Question
  CREATE_QUESTION: '/questions',
  REPORT_QUESTION: (questionId: string) => `/questions/${questionId}/report`,
  DELETE_QUESTION: (questionId: string) => `/questions/${questionId}`,
  UPDATE_QUESTION: (questionId: string) => `/questions/${questionId}`,
  SEARCH_QUESTION: '/questions/search',

  //Claims
  CREATE_CLAIM: '/claims',

  //Bundle
  CREATE_BUNDLE: '/bundles',
  SCRAPE_BUNDLE: (bundleId: string) => `/bundles/${bundleId}/scrape`,
  ADD_QUESTIONS_TO_BUNDLE: (bundleId: string) =>
    `/bundles/${bundleId}/questions`,
  DELETE_QUESTIONS_FROM_BUNDLE: (bundleId: string) =>
    `/bundles/${bundleId}/questions`,
  GET_BUNDLE: (bundleId: string) => `/bundles/${bundleId}`,
  DELETE_BUNDLE: (bundleId: string) => `/bundles/${bundleId}`,
  UPDATE_BUNDLE: (bundleId: string) => `/bundles/${bundleId}`,
  REORDER_BUNDLE: (bundleId: string) => `/bundles/${bundleId}/question-order`,
  SEARCH_BUNDLE: '/bundles/search',
  MY_BUNDLE: '/bundles/my',

  //Tag
  TAGS: '/tags',
};
