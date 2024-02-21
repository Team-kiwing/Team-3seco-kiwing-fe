export interface ToggleProps
  extends React.HtmlHTMLAttributes<HTMLLabelElement> {
  name?: string;
  on?: boolean;
  disabled?: boolean;
  onChange: () => void;
}
