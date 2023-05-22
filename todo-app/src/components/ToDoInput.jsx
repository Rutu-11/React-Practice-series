import React,{useState} from 'react'

function ToDoInput({handleSubmit}) {
    let [todo, setTodo]  = useState("");
  return (
    <div style={{width:"30%", margin:'auto',border:'2px solid blue' , padding:'20px 0' }}>
        <h3>Add Todos</h3>
      <input type="text" value={todo} onChange={(e)=> setTodo(e.target.value)} />
      <button onClick={()=>{
        let payload={
            todo:todo,
            status:false
        }
        handleSubmit(payload)
        setTodo("")
        }} >Add ToDo</button>
    </div>
  )
}

export default ToDoInput;
