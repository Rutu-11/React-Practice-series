import logo from './logo.svg';
import {useState} from 'react'
import './App.css';
import ToDoInput from './components/ToDoInput';
import TodoDisplay from './components/TodoDisplay';
function App() {
 
    let [ todoList, setTodoList] = useState([]);

    const handleToggle = (ind)=>{
     let newArray =  todoList.map((ele,i)=>{
        return i==ind ? {...ele, status:!ele.status}:ele;
      })

      setTodoList(newArray)
  }
    const handleSubmit = (payload)=>{     
        setTodoList([...todoList,payload])
        console.log('todoList',todoList)
    }

    const handleDelete = (index)=>{
      let newArray = todoList.filter((ele,ind)=>{
        return ind !== index;
      })
      setTodoList(newArray)
    }
  return (
    <div className="App">
      <ToDoInput handleSubmit={handleSubmit} />
      <TodoDisplay todoList={todoList} handleToggle={handleToggle} handleDelete={handleDelete}/>
    </div>
  );
}

export default App;
