export interface ToggleProps
  extends React.HtmlHTMLAttributes<HTMLLabelElement> {
  on: boolean;
  onChange?: () => void;
  isColorReverse?: boolean;
  width?: string;
  height?: string;
  isContentShow?: boolean;
}

export interface ToggleContainerProps {
  $width: string;
  $height: string;
}

export interface ToggleSwitchProps extends ToggleContainerProps {
  $isColorReverse: boolean;
  $on?: boolean;
  $isContentShow: boolean;
}
