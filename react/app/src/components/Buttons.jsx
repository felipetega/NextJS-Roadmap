import { useState } from "react";

export function Button(params) {
    const [count, setCount] = useState(0)

    return(
        <>
            <button onClick={()=>setCount(count+1)}>{count}</button>
        </>
    )
}

export function SharedButton({count, onClick}) {
    return(
        <>
            <button onClick={onClick}>{count}</button>
        </>
    )
}