import React,{useEffect} from 'react'

function TodoDisplay({todoList,handleToggle,handleDelete}) {
  return (
    <div style={{width:"60%", margin:"auto"  }}>
      <table style={{width:"100%"}} >
        <thead>
            <tr>
                <th>Sr.no</th>
                <th>ToDo</th>
                <th>Status</th>
                <th>Delete</th>
            </tr>
        </thead>
        <tbody>
            {
                todoList.map((ele,ind)=>{
                    return(
                        <tr key={ele.todo}>
                            <td>{ind+1}</td>
                            <td>{ele.todo} </td>
                            <td style={{background: ele.status?"green":"red", color:"#fff", cursor:"pointer"}} onClick={()=>handleToggle(ind)} >{ele.status? "Completed":"Not Completed"} </td>
                            <td> <button onClick={()=>handleDelete(ind)} >Delete</button> </td>
                        </tr>
                    )
                })
            }
        </tbody>
      </table>
    </div>
  )
}

export default TodoDisplay
