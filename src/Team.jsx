import { useState } from "react"

export default function Team () {
    const [num, setCount] = useState(0); 
    const increaseButton = () => {
        const newNum = num + 1; 
        setCount(newNum);
    }
    const decreaseButton = () => {
        const newNum = num - 1; 
        setCount(newNum)
    }
    return (
        <div>
            <h2>Players: {num} </h2>
            <button onClick={increaseButton}>increase</button>
            <button onClick={decreaseButton}>Decrease</button>
        </div>
    )
}