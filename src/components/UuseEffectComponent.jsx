import React ,{useEffect, useState} from "react";

const UuseEffectComponent =()=>{

    const [count, setCount]= useState(0);
    useEffect(()=>{
        console.log("counter is mounting...",{count});
        setCount(count + 1);
    },[])

    return(
        <>
        <h1>counter</h1>
        <p>Counter is {count} </p>
        </>
    );
}
export default UuseEffectComponent;