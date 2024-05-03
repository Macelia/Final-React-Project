import React from 'react'
import './TodoList.css'
import ListItem from './ListItem'

const TodoList = ({todos}) => {
  return (
    <div className='todo-list'>
       {
        todos.map((todo,index)=>{
          return ( <ListItem  text={todo} key={index}/>)

        })
       }
      
       
      
    </div>
  )
}

export default TodoList
