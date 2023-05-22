import React,{useState} from 'react'

function InputComp() {
    const [text, setText] = useState("");
  return (
    <div>
        <h1>Enter input Here</h1>
      <input type="text" onChange={(e)=>{ setText(e.target.value) }} value={text} />
      <button onClick={(e)=>{
        e.target.value=""
        setText("")
        }} >Clear</button>
      <p>{text}</p>
    </div>
  )
}

export default InputComp
