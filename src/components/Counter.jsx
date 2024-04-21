import { useState } from "react"

export default function Counter(){
    const [count,setCount] = useState(0);
    const [incrementBy,setIncrementBy]= useState(1);

    function handleClick(){
        setCount(count+incrementBy)
    }
    function decrementCount(){
        setCount(count-incrementBy)
    }
    function increaseIncrement(){
        setIncrementBy(incrementBy+1);
    }
    function decreaseIncrement(){
        setIncrementBy(incrementBy-1);
    }
    return <div>
        The counter is :{count} 
        <button onClick={handleClick}>Add</button>
        <button onClick={decrementCount}>Subtract</button>
        
        <h1>Incrementing by {incrementBy}</h1>
        <button onClick={increaseIncrement}>Add Increment</button>
        <button onClick={decreaseIncrement}>Subtract Increment</button>

        
        </div>
}