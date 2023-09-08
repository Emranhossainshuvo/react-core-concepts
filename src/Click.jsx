import { useState } from "react"

export default function Click() {

    const clickStyle = {
        border: '2px solid green', 
        color: 'blue'
    }

    const [digit, setCount] = useState(0);
    
    return ( 
        <div style={clickStyle}>
        <h2>Digt: {digit}</h2>

        <button onClick={() => {setCount(digit + 1)}}>upgrade</button>
        <button onClick={() => {setCount(digit - 1)}}>disgrade</button>
        </div>
    )
}