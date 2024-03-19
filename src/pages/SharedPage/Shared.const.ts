export const SharedHookConstants = {
  SHARED_SEARCH_REGISTER: 'SharedSearch',
  SHARED_SELECTOR_CONTENT: ['최근순', '스크랩 순'],
  SHARED_DYNAMIC_QUERY_KEY: (
    keyword: string,
    filteredTags: object | string,
    isRecent: string
  ) => 'BundleSearch' + keyword + filteredTags + isRecent,
  SHARED_TAG_FILTERING: (tags: number[]) =>
    tags.length === 0 ? [] : tags.join(', '),
};

export const SharedTextConstants = {
  SHARED_ERROR_MESSAGE: '죄송합니다! 에러가 발생했습니다!',
  SHARED_INFINITY_LOADING: '다음 페이지 불러오는 중...',

  SHARED_NEXT_PAGE_BUTTON: '다음 페이지 불러오기',
  SHARED_NEXT_PAGE_NONE_BUTTON: '마지막 꾸러미에요!',

  SHARED_SEARCH_NONE: '검색된 결과가 없습니다.',
};
