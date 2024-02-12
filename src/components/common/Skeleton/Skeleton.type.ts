export interface PropsBoxSkeleton {
  $width: string;
  $height: string;
  $borderRadius?: string;
}

export interface PropsCircleSkeleton {
  $size: string;
}

export interface PropsParagraphSkeleton extends React.ComponentProps<'div'> {
  $width: string;
  $height: string;
  $line?: number;
  $borderRadius?: string;
  $marginBottom?: string;
}
