import { Box } from './Box';
import { PropsParagraphSkeleton } from './Skeleton.type';

export const Paragraph = ({
  $line = 3,
  $width,
  $height,
  $marginBottom = 10,
}: PropsParagraphSkeleton) => {
  const matchResult = $width.match(/\d+/);
  const widthUnit = $width.match(/[a-zA-Z%]+/);
  const widthNumber = matchResult ? parseInt(matchResult[0]) : 0;
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
              width:
                index === $line - 1
                  ? `${widthNumber * 0.65}${widthUnit}`
                  : $width,
            }}
          />
        );
      })}
    </div>
  );
};
