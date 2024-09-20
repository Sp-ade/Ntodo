import React from 'react'
import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EditForm = ({editItem, task}) => {
    const [value, setValue] = useState(task.task);
    const [isEmpty, setIsEmpty] = useState(true)

    useEffect(() => {
      value ? setIsEmpty(true) : setIsEmpty(false);
      if(!isEmpty){
        document.getElementById("buteditid").style.display = "none"
     } else{
       document.getElementById("buteditid").style.display = "initial"
     }
    })

    const handleSubmit = e => {
        e.preventDefault();
        toast.success("Update successful")
        if(value){
        editItem(value, task.id);
        setValue("");
      } 
      }
      return (
        <div className="editListBody ">
        <form onSubmit={handleSubmit} className='myForm' >
        <input className="inpEdit" onChange={(e) => setValue(e.target.value)} value={value} type="text" placeholder="edit item"/> 
        <button className="butEdit" id= "buteditid" type='submit'>
          Update
          </button>
        </form>
        <ToastContainer /></div>
        
      )
}

export default EditForm
