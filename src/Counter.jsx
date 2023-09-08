import { useState } from "react"

export default function Counter () {
    const [count, setCount] = useState(0)

    const handleAdd = () => {
        const newCount = count + 1; 
        setCount(newCount)
    }

    const handleReduce = () => {
        const newCount = count - 1; 
        setCount(newCount)
    }

    return (
        <div style={{border: '3px dotted tomato'}}>
            <h3>Counter: {count} </h3>
            <button onClick={handleAdd} style={{marginBottom: '5px'}}>count</button>
            <button onClick={handleReduce}>reduce</button>
        </div>
    )
}