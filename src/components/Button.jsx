const Button = ({ value, className, onClick }) => {
  const addClass = (val) => {
    if (val === "C") {
      return "red-btn";
    } else if (val === " ± " || val === "%") {
      return "blue-btn";
    } else if (val === "÷" || val === "×" || val === "+" || val === "-")
      return "green-btn";
    if (val === "=") return "yellow-btn";
  };
  const diffColorResult = addClass(value);
  return (
    <div onClick={onClick} className={`${className} ${diffColorResult}`}>
      {value}
    </div>
  );
};

Button.defaultProps = {
  styleBtn: "",
};

export default Button;
