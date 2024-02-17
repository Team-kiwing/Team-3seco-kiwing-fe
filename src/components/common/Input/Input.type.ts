export interface InputProps extends React.HTMLAttributes<HTMLInputElement> {
  width: string;
  fontSize?: number;
  margin?: number;
  label?: string;
  placeholder?: string;
  errorMessage?: string;
}

export interface InputStyledProps {
  $width?: string;
  $fontSize?: number;
  $margin?: number;
  $isError?: boolean;
}
