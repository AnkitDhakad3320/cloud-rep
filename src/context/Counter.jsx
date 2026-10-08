import {createContext, useState ,useContext} from 'react';

export const CounterContext = createContext(null);
export const useCounter  = ()=>{
        const counterState = useContext(CounterContext);
        return counterState;
}

export const CounteProvider = (props) => {
    const [count , setCount] = useState(0);
    return <CounterContext.Provider value= {{count, setCount , name : "piyush"}}>
        {props.children}
    </CounterContext.Provider>
} 