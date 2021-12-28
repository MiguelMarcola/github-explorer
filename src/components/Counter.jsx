import { useState } from "react";

export function Counter() {
    const [couter, setCounter] = useState(0);

    function Increment() {
        setCounter(couter + 1);
    }

    return(
        <div>
            <h2>{couter}</h2>
            <button type="button" onClick={Increment}>Increment +1</button>
        </div>
    );
}