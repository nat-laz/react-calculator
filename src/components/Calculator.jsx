import { useState } from "react";
import Display from "./Display";
import Keypad from "./Keypad";
import Button from "./Button";

const btnValues = [
  ["C", " ± ", "%", "÷"],
  [7, 8, 9, "×"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  [0, ".", "="],
];

const Calculator = () => {
  const [btnNum, setBtnNum] = useState("");
  const [btnNum2, setBtnNum2] = useState("");
  const [symbol, setSymbol] = useState("");
  const [result, setResult] = useState("");

  //Functionality-----------------------------

  const calc = (num1, operand, num2 = "") => {
    let a = num1.toString().substring(0, 9);
    let b = num2.toString().substring(0, 9);

    switch (operand) {
      case "÷":
        setResult(+(a / b));
        setBtnNum(+(a / b));
        setBtnNum2("");
        setResult("");
        break;
      case "×":
        setResult(a * b);
        setBtnNum(a * b);
        setBtnNum2("");
        setResult("");
        break;
      case "-":
        setResult(a - b);
        setBtnNum(a - b);
        setBtnNum2("");
        setResult("");
        break;
      case "+":
        setResult(+a + +b);
        setBtnNum(+a + +b);
        setBtnNum2("");
        setResult("");
        break;
      default:
        break;
    }
  };

  const reset = () => {
    setBtnNum("");
    setBtnNum2("");
    setResult("");
    setSymbol("");
  };

  const displayOnScreen = (e) => {
    let val = e.target.innerHTML;

    val === "=" && calc(btnNum, symbol, btnNum2);

    val === "%" && setResult(btnNum / 100);

    if (!btnNum && isNaN(val)) {
      return;
    }

    if (!btnNum && val === ".") {
      setBtnNum("0.");
    }
    if (btnNum && symbol && !btnNum2 && val === ".") {
      setBtnNum2("0.");
    }

    if (btnNum && !symbol && val === ".") {
      if (btnNum.includes(".")) {
        return;
      }
      setBtnNum((prevValue) => prevValue + ".");
    }

    if (btnNum && symbol && btnNum2 && val === ".") {
      if (btnNum2.includes(".")) {
        return;
      }
      setBtnNum2((prevValue) => prevValue + ".");
    }
    if (btnNum && btnNum2 && val === " ± ") {
      setBtnNum2(btnNum2 * -1);
    }
    if (btnNum && !btnNum2 && val === " ± ") {
      setBtnNum(btnNum * -1);
    }
    if (!isNaN(val) && symbol === "") {
      if (val === "0" && !btnNum) {
        return;
      }
      setBtnNum((prevValue) => prevValue + val);
    }
    if (!isNaN(val) && symbol && btnNum) {
      if (val === "0" && !btnNum2) {
        return;
      }
      setBtnNum2((prevValue) => prevValue + val);
    }
    if (isNaN(val) && val !== " ± " && val !== ".") {
      setSymbol(val);
    }

    val === "C" && reset();
  };

  return (
    <div className="main-container">
      <Display
        text={
          result
            ? result.toString().substring(0, 9)
            : btnNum2
            ? btnNum2.toString().substring(0, 9)
            : btnNum.toString().substring(0, 9)
        }
      />
      <Keypad>
        {btnValues.flat().map((value, i) => (
          <Button
            className={value === 0 ? "long-btn" : "btn"}
            key={i}
            value={value}
            onClick={displayOnScreen}
          />
        ))}
      </Keypad>
    </div>
  );
};

export default Calculator;
