import { useState } from "react"

export default function Count (){
    const [count, setCount] = useState (0);
    function handleclick (){
        setCount(count + 1)
    }
    return(
        <>
        <button onClick={handleclick}>Button {count} </button>
        </>
    )
}