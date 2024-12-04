import { useState } from 'react'
import { Button } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'



function TodoList({todos}) {
  console.log(todos);
  return (
    <ul>
      {todos.map((todo, index) => {
        return <li key={index}>{todo}</li>
      })}
    </ul>
  )
}

function ClearTodo({setTodos}) {
  return (
    <Button variant = "danger m-3" onClick={() => setTodos([])}>Clear All</Button>   
  )
}

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  function addTodo() {
    setTodos([...todos, newTodo]);
    setNewTodo("");
  }
  return (
    <div className='m-3'>
      <input type="text" 
      value={newTodo} 
      onChange={(event) => setNewTodo(event.target.value)}
      placeholder='Add a new task'/>
      <Button variant="primary" className='ms-3 ' onClick={addTodo}>Add Task</Button>
      <ClearTodo setTodos={setTodos}/>
      <TodoList todos={todos} />      
    </div>

  )
}
export default App



