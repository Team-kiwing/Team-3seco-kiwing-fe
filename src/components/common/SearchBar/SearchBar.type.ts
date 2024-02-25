export interface SearchBarProps extends React.HTMLAttributes<HTMLInputElement> {
  handleSearchIcon?: () => void;
  handleFormSubmit?: () => void;
  maxWidth?: string;
}

export interface SearchBarStyleProps {
  $maxWidth?: string;
}
