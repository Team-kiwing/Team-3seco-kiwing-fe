import { Box } from './Box';
import { PropsParagraphSkeleton } from './Skeleton.type';

export const Paragraph = ({
  $line = 3,
  $width,
  $height,
  $borderRadius,
  $marginBottom = '1rem',
}: PropsParagraphSkeleton) => {
  return (
    <div>
      {Array.from(Array($line), (_, index) => {
        return (
          <Box
            key={index}
            $width={$width}
            $height={$height}
            $borderRadius={$borderRadius}
            style={{
              marginBottom: $marginBottom,
              width:
                index === $line - 1 ? `${parseInt($width) * 0.65}rem` : $width,
            }}
          />
        );
      })}
    </div>
  );
};
