import React from 'react'
import { useState, useEffect } from 'react';

const EditForm = ({editItem, task}) => {
    const [value, setValue] = useState(task.task);

    const handleSubmit = e => {
        e.preventDefault();
        editItem(value, task.id);
        setValue("");
      }
      return (
        <div className="editListBody ">
        <form onSubmit={handleSubmit} className='myForm' >
        <input className="inp" onChange={(e) => setValue(e.target.value)} value={value} type="text" placeholder="edit item"/> 
        <button className="but" type='submit'>
          Add
          </button>
        </form></div>
        
      )
}

export default EditForm
