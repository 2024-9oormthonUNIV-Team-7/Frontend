export interface ButtonProps {
  text?: string;
  textColor?: string;
  bgColor?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  img?: string;
}
