
import { useState } from 'react';
import Form from './Components/Form'
import TodoList from './Components/TodoList';
import './Style.css'
function App() {

  const [todo,setTodo]=useState([]);

  console.log(todo);

 const AddToDo =(newtodo)=>{

    setTodo([...todo,newtodo])

 

 } 
  return (
    <div className="App">
      <Form addToDo={AddToDo}/>
      <TodoList todos={todo}/>

    </div>
  );
}

export default App;
