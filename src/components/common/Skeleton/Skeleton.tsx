import { Box } from './Box';
import { Circle } from './Circle';
import { Paragraph } from './Paragraph';

const Skeleton = {
  Box,
  Circle,
  Paragraph,
};
/**
 * @summary 사용법  <Skeleton.Circle $size={'100px'} />
         <Skeleton.Box
          $width={'718px'}
          $height={'63px'}
        />
       <Skeleton.Paragraph
          $marginBottom={10}
          $width={'625px'}
          $height={'42px'}
          $line={5}
        />
 * @description 공통 Skeleton 컴포넌트
 * Box
 * @param $width width (px, rem, %)
 * @param $height height (px, rem, %)
 * Circle
 * @param $size size (px, rem, %)
 * Paragraph
 * @param $width width (px, rem, %)
 * @param $height height (px, rem, %)
 * @param $line optional) line 문단의 개수, 기본 개수: 3
 * @param $marginBottom optional) marginBottom 문단 사이의 간격, 기본 값: 10px
 * @returns
 */
export default Skeleton;
