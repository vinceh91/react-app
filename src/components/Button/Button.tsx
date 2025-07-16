import styles from "./Button.module.css";

interface Props {
  children: string;
  color?: "primary" | "secondary";
  onClick: () => void;
}

const Button = ({ children, color = "primary", onClick }: Props) => {
  return (
    <button type="button" className={styles["btn"]} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
