import React from 'react'
import './ListItem.css'

const ListItem = (props) => {

  return (
    <div className='list-item'>
    <p>{props.text}</p>
    <button className='checkbox'></button>
      
    </div>
  )
}

export default ListItem
