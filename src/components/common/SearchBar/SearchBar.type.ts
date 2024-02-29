import { RegisterOptions } from 'react-hook-form';

export interface SearchBarProps extends React.HTMLAttributes<HTMLInputElement> {
  handleSearchSubmit: () => void;
  maxWidth?: string;
  REGISTER: string;
  VALIDATE?: RegisterOptions;
}

export interface SearchBarStyleProps {
  $maxWidth?: string;
}
