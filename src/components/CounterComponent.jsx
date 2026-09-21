import react, {useState} from "react";

const CounterComponent = () => {
    const [count, setCount] = useState(0);
        return (
        <>
        <p>{count % 2 === 0 ? "Even" : "false"}</p>
        <p>Count is : {count}</p>
        <button onClick={()=>setCount(count+1)}>Increment Count</button>
        <button onClick={()=>setCount(count-1)}>decrement Count</button>
        </>
    );
};
export default CounterComponent;