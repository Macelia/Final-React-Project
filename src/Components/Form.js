import React, { useState } from 'react'
import './Form.css'

const form = ({addToDo}) => {
  
  const [text,setText]= useState("");


  const handleSubmit=(e)=>{
    e.preventDefault();
    addToDo(text);

  }

  return (
 
      <form className='form' onSubmit={handleSubmit}>
        <input type='text' className='text-fild' value={text} onChange={(e)=>setText(e.target.value)}/>
        <input type='submit' className='submit-button' value='Ajouter' />


      </form>
   
  )
}

export default form
