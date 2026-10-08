import { useCounter } from "../context/Counter";

const Counter = () => {
    const counterState = useCounter();
    console.log(counterState);
    return (
        <div>
        <button onClick={()=>counterState.setCount(counterState.count + 1 )}>Increment</button>
        <button onClick={()=>counterState.setCount(counterState.count - 1 )}>Decrement</button> 
        </div>
    )
}
export default Counter; 
