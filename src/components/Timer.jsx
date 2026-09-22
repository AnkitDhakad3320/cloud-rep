import { useEffect, useState } from "react"

 
 const Timer=()=> {
    const [time , setTime] = useState(0);
    useEffect(
        ()=>{
   const ti=setInterval(()=>{setTime(time+1)},1000)
                console.log("interval is creat");

            return ()=>{
                clearInterval(ti);
                console.log("interval is clear");
            }
        } 
    ,[time])

    return(
        <>
        <h3>
            StopWatch
        </h3>
        <p>
            Time is {time}
        </p>
        </>
    )
 };
 export default Timer;