import { RegisterOptions } from 'react-hook-form';

export interface SearchBarProps extends React.HTMLAttributes<HTMLInputElement> {
  fontSize?: number;
  handleSearchSubmit: () => void;
  maxWidth?: string;
  REGISTER: string;
  VALIDATE?: RegisterOptions;
  isOnlyBorderBottom?: boolean;
}

export interface SearchBarStyleProps {
  $maxWidth?: string;
}
