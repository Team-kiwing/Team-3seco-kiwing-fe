export interface TextareaProps
  extends React.HTMLAttributes<HTMLTextAreaElement> {
  width: string;
  height: string;
  fontSize?: number;
  margin?: number;
  label?: string;
  placeholder?: string;
  errorMessage?: string;
}

export interface TextareaStyledProps {
  $width?: string;
  $height?: string;
  $fontSize?: number;
  $margin?: number;
  $isError?: boolean;
}
