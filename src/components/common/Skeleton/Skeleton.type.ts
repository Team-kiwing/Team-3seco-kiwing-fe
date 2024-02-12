export interface PropsBoxSkeleton {
  $width: number | string;
  $height: number;
  $borderRadius?: number;
}

export interface PropsCircleSkeleton {
  $size: number;
}

export interface PropsParagraphSkeleton extends React.ComponentProps<'div'> {
  $width: number;
  $height: number;
  $line?: number;
  $borderRadius?: number;
  $marginBottom?: number;
}
