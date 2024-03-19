import { Box } from './Box';
import { PropsParagraphSkeleton } from './Skeleton.type';

export const Paragraph = ({
  $line = 3,
  $width,
  $height,
  $marginBottom = 10,
}: PropsParagraphSkeleton) => {
  return (
    <div>
      {Array.from(Array($line), (_, index) => {
        return (
          <Box
            key={index}
            $width={$width}
            $height={$height}
            style={{
              marginBottom: `${$marginBottom}px`,
              width: index === $line - 1 ? `calc(${$width} * 0.65)` : $width,
            }}
          />
        );
      })}
    </div>
  );
};
