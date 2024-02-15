export interface PropsBoxSkeleton {
  $width: string;
  $height: string;
}

export interface PropsCircleSkeleton {
  $size: string;
}

export interface PropsParagraphSkeleton extends React.ComponentProps<'div'> {
  $width: string;
  $height: string;
  $line?: number;
  $marginBottom?: number;
}
