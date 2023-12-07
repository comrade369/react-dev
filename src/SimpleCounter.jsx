import { useState } from "react";

function SimpleCounter() {

    const [value, setValue] = useState(0);

    return (
        <>
            <h3>{value}</h3>
            <button onClick={() => {return setValue(value + 1)}}>+</button>
            <button onClick={() => {return setValue(value - 1)}}>-</button>
        </>
    );
}

export default SimpleCounter;