import { useState } from "react";
import "../style.css";

function Calculator() {

    const [inputValue, setInputValue] = useState("");

    const clear = () => {
        setInputValue("");
    }

    const display = (value) => {
        console.log(inputValue + value);
        setInputValue(inputValue + value);
    }

    const calculate = () => {
        console.log(inputValue);
        let answer = eval(inputValue);
        console.log(answer);
        setInputValue(answer);
        
    }

    return (
        <>
            <form className="calculator">
                <input className="value" type="text" value={inputValue} />
                <span className="num clear" onClick={() => clear()}>c</span>
                <span onClick={() => display("/")}>/</span>
                <span onClick={() => display("*")}>*</span>
                <span onClick={() => display("7")}>7</span>
                <span onClick={() => display("8")}>8</span>
                <span onClick={() => display("9")}>9</span>
                <span onClick={() => display("-")}>-</span>
                <span onClick={() => display("4")}>4</span>
                <span onClick={() => display("5")}>5</span>
                <span onClick={() => display("6")}>6</span>
                <span onClick={() => display("+")} className="plus">+</span>
                <span onClick={() => display("1")}>1</span>
                <span onClick={() => display("2")}>2</span>
                <span onClick={() => display("3")}>3</span>
                <span onClick={() => display("0")}>0</span>
                <span onClick={() => display("00")}>00</span>
                <span onClick={() => display(".")}>.</span>
                <span onClick={() => calculate()} className="equal">=</span>
            </form>
        </>
    );
}

export default Calculator;