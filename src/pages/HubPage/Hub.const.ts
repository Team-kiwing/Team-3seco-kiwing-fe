export const HubHookConstants = {
  HUB_SEARCH_REGISTER: 'hubSearch',
  HUB_SELECTOR_CONTENT: ['최근순', '스크랩 순'],
  HUB_DYNAMIC_QUERY_KEY: (
    keyword: string,
    filterdTags: object | string,
    isRecent: string
  ) => 'questionSearch' + keyword + filterdTags + isRecent.toString(),
  HUB_TAG_FILTERING: (tags: number[]) =>
    tags.length === 0 ? [].join('') : tags.join(', '),
};
