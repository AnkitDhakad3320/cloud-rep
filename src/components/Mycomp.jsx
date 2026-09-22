import { useEffect, useState } from "react";


const MyComponent = ()=>{
 const [count , SetCount] = useState(0);
 
    useEffect(
        ()=>{
            console.log("myComponent is mounting");
              return ()=>{
                console.log("unmounting ....");
            }
        },[]
    );
    useEffect(
      ()=>{
        console.log("count is Updating...")
          return ()=>{
                console.log("count unmount ..")
            }
      },[count]
    )

    return(
        <>
        <p>  count is {count} </p>
        <button onClick={()=>{SetCount(count + 1)}} >Update </button>
        </>

    );
};
export default MyComponent;