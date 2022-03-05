import styles from "./button.module.scss";

interface ButtonProp {
  children: string;
  style?: React.CSSProperties;
  variant?:"primary"
}
const Button = ({ children, style, variant }: ButtonProp) => {
  return (
  <button style={style} className={`${styles[`${variant}`]}`}>{children}</button>
  )
};

export default Button;
