import {
  NoSearchResultsImages,
  NotSearchWrapper,
  Text1,
  Text2,
} from './NoSearchResults.style';
import { NoSearchResultsProps } from './NoSearchResults.type';

/**
 * @summary 사용법    <NoSearchResults
            text1="앗"
            text2="검색된 결과가 없습니다."
            alt={NO_SEARCH_RESULTS_ALT_IMAGE}
            src={NO_SEARCH_RESULTS_IMAGE}
          />
 * @description 공통 NoSearchResults 컴포넌트
 * @param text1 선택) 메인 텍스트 string
 * @param text2 선택) 서브 텍스트 string
 * @param src 필수) 이미지 경로 string
 * @param alt 필수) 이미지 alt string
 * @returns
 */

const NoSearchResults = ({ text1, text2, alt, src }: NoSearchResultsProps) => {
  return (
    <>
      <NotSearchWrapper>
        <Text1>{text1}</Text1>
        <Text2>{text2}</Text2>
        <NoSearchResultsImages
          src={src}
          alt={alt}
        />
      </NotSearchWrapper>
    </>
  );
};

export default NoSearchResults;
