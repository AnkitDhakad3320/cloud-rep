import React from "react";

const Square = (prop)=> {
    return (
        <div onClick={prop.onClick}  className="square"> {prop.value} </div>
    )
}
export default Square;