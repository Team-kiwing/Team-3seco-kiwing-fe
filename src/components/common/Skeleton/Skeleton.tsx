import { Box } from './Box';
import { Circle } from './Circle';
import { Paragraph } from './Paragraph';

const Skeleton = {
  Box,
  Circle,
  Paragraph,
};
/**
 * @summary 사용법 <Skeleton.Box
        $width={718}
        $height={63}
        $borderRadius={15}
      />
      <Skeleton.Circle size={100} />
      <Skeleton.Paragraph
        $width={625}
        $height={42}
        $marginBottom={10}
        $line={6}
      />
 * @description 공통 Skeleton 컴포넌트
 * Box
 * @param $width width
 * @param $height height
 * @param $borderRadius optional) borderRadius 테두리 둥글기, 기본 값: 4px
 * Circle
 * @param $size size
 * Paragraph
 * @param $width width
 * @param $height height
 * @param $line optional) line 문단의 개수, 기본 개수: 3
 * @param $borderRadius optional) borderRadius 테두리 둥글기, 기본 값: 4px
 * @param $marginBottom optional) marginBottom 문단 사이의 간격, 기본 값: 10px
 * @returns
 */
export default Skeleton;