interface Props {
  children: string;
  color?: "primary" | "secondary";
}

const Button = ({ children, color = "primary" }: Props) => {
  return (
    <button type="button" className={"btn btn-" + color}>
      {children}
    </button>
  );
};

export default Button;
