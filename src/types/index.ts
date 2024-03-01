export type SharedType = 'PUBLIC' | 'PRIVATE';

export type Provider = 'GOOGLE';

export type Roles = 'ROLE_USER' | 'ROLE_ADMIN';

export type SortingType = 'LATEST' | 'POPULAR';

export interface ImageRequest {
  file: File;
}

export interface ImageResponse {
  id: number;
  nickname: string;
  email: string;
  provider: Provider;
  profileImage: string;
}

// nickname 변경 request, 내 정보 request
export interface UserInfoRequest {
  email: string;
  createdAt: string;
  updatedAt: string;
  id: number;
  nickname: string;
  profileImage: string;
  provider: Provider;
  lastLoginedAt: string;
  deletedAt: string;
  memberRoles: Roles;
}

// nickname 변경 response, 내 정보 response
export interface UserInfoResponse {
  id: number;
  nickname: string;
  email: string;
  provider: Provider;
  profileImage: string;
}

// access 토큰 재발급, 로그아웃
export interface TokenRequest {
  refreshToken: string;
}

export interface TokenResponse extends TokenRequest {
  accessToken: string;
}

export interface QuestionCreateRequest {
  content: string;
  answer: string;
  answerShareType: SharedType;
  tagIds: number[];
  bundleId: number;
}

export interface Question {
  id: number;
  content: string;
  answer: string;
  answerShareType: SharedType;
  shareCount: number;
  originId: number;
  tags: Tag[];
  isHot: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface Tag {
  id: number;
  name: string;
}

//params
export interface QuestionReportRequest {
  id: number;
  reason: string;
}

export interface QuestionReportResponse {
  id: number;
  reason: string;
  questionId: number;
}

export interface QuestionDeleteRequest {
  id: number;
}

export interface QuestionUpdateRequest {
  content: string;
  answer: string;
  answerShareType: SharedType;
  tagIds: number[];
}

export interface QuestionSearchRequest {
  keyword: string;
  page: number;
  size: number;
}

export interface QuestionSearchResponse {
  questionResponses: Question[];
  pageResponse: PageResponse;
}

export interface PageResponse {
  currentPage: number;
  lastPage: number;
}

export interface ClaimsCreateRequest {
  content: string;
}

export interface ClaimsCreateResponse {
  id: number;
  content: string;
}

export interface BundlesCreateRequest {
  name: string;
  shareType: string;
  tagIds: number[];
}

export interface BundlesUpdateRequest extends BundlesCreateRequest {}

export interface BundlesBasic {
  id: number;
  name: string;
  shareType: string;
  scrapeCount: number;
  tags: Tag[];
  isHot: boolean;
  createdAt: string;
  updatedAt: string;
}
export interface Bundle extends BundlesBasic {
  questions: Question[];
}

export interface BundlesUpdateResponse extends BundlesBasic {}

export interface PageCondition {
  page: number;
  size: number;
}

export interface BundleSearchRequest extends PageCondition {
  sortingType: SortingType;
  tagIds: number[];
  keyword: string;
}

export interface BundleSearchResponse {
  totalPages: number;
  currentPage: number;
  pageSize: number;
  content: BundlesBasic[];
}
