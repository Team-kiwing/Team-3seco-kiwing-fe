export const HubHookConstants = {
  HUB_SEARCH_REGISTER: 'hubSearch',
  HUB_SELECTOR_CONTENT: ['최근순', '스크랩 순'],
  HUB_DYNAMIC_QUERY_KEY: (
    keyword: string,
    filterdTags: object | string,
    isRecent: string
  ) => 'questionSearch' + keyword + filterdTags + isRecent.toString(),
  HUB_TAG_FILTERING: (tags: number[]) =>
    tags.length === 0 ? [] : tags.join(', '),
};

export const HubTextConstants = {
  HUB_ERROR_MESSAGE: '죄송합니다! 에러가 발생했습니다!',
  HUB_INFINITY_LOADING: '다음 페이지 불러오는 중...',

  HUB_NEXT_PAGE_BUTTON: '다음 페이지 불러오기',
  HUB_NEXT_PAGE_NONE_BUTTON: '마지막 질문이에요!',

  HUB_SEARCH_NONE: '검색된 결과가 없습니다.',
};
