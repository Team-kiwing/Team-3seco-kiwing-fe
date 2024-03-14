import {
  NO_SEARCH_RESULTS_ALT_IMAGE,
  NO_SEARCH_RESULTS_IMAGE,
} from './NoSearchResults.const';
import {
  NoSearchResultsImages,
  NotSearchWrapper,
  Text1,
  Text2,
} from './NoSearchResults.style';
import { NoSearchResultsProps } from './NoSearchResults.type';

/**
 * @summary 사용법   <NoSearchResults
            text1="앗"
            text2="검색된 결과가 없습니다."
          />
 * @description 공통 NoSearchResults 컴포넌트
 * @param text1 메인 텍스트 string
 * @param text2 서브 텍스트 string
 * @returns
 */

const NoSearchResults = ({ text1, text2 }: NoSearchResultsProps) => {
  return (
    <>
      <NotSearchWrapper>
        <Text1>{text1}</Text1>
        <Text2>{text2}</Text2>
        <NoSearchResultsImages
          src={NO_SEARCH_RESULTS_IMAGE}
          alt={NO_SEARCH_RESULTS_ALT_IMAGE}
        />
      </NotSearchWrapper>
    </>
  );
};

export default NoSearchResults;
