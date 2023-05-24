import React from 'react'
import { useState } from 'react'

function FunctionComp() {
    const [count, setCount] = useState(0);
    const increment = ()=>{  // will increment by 1 only due to async
                             // nature operation will be performent on prev value and not the updated one.
        setCount(count+1)
        setCount(count+1)
        setCount(count+1)
    }

    // const [dec, setDec] = useState(0);
    const decrement = ()=>{  // will increment by 3 only since we are using updator function
        // i.e it will cause decrement as many times we call setCount fun.
        //i.e due to batch update
        setCount((prev)=>{
            return prev -1;
        })
        setCount((prev)=>{
            return prev -1;
        })
        setCount((prev)=>{
            return prev -1;
        })
    }


  return (
    <div style={{width:"40%", margin:"40px auto", boxShadow:"0 0 10px black", height:"300px" }} >
      <h1>Counter App</h1>
      <h5>{"Count : " + count }</h5>
      <button onClick={increment}>+ </button> &emsp; &#160;
      <button disabled={count<=0} onClick={()=>{decrement(-1)}}>-</button>
    </div>
  )
}

export default FunctionComp
