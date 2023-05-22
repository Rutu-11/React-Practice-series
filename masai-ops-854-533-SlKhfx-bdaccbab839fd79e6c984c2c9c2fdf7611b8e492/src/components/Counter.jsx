import React,{useState} from 'react'

function Counter() {
    const [count, setCount] = useState(0);
    const handlecount = (num)=>{
        
        setCount((prev)=>{
            let curr = prev+num;
            console.log(curr)
            return curr;
        });
        
    }
  return (
    <div>
        <h2 data-testid = 'counter-header'>Counter</h2>
        <h3 data-testid = 'count'>{count}</h3>
        <button data-testid = 'add-btn'onClick={()=>{handlecount(1)}} >+</button>
        <button data-testid = 'subtract-btn' disabled={count==0} onClick={()=>{handlecount(-1)}} >-</button>
        <button data-testid = 'double-btn' onClick={()=>{handlecount(count)}}>Double</button>
    </div>
  )
}

export default Counter