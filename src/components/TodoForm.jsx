import React, { useEffect } from 'react'
import { useState } from 'react';
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const TodoForm = ({addItem}) => {
    const [value, setValue] = useState("");
const [isEmpty, setIsEmpty] = useState(true);

const handleChange = e => {
  setValue(e.target.value)
}

useEffect(() => {
  value ? setIsEmpty(true) : setIsEmpty(false);
  if(!isEmpty){
    document.getElementById("butid").style.display = "none"
 } else{
   document.getElementById("butid").style.display = "initial"
 }
})
   
  
// const isEmpty = true;
//   if (isEmpty){
//     document.getElementById("butid").style.display = "none";}
const handleSubmit = e => {
  if (value){
    e.preventDefault();
    addItem(value);
    setValue("");} else{
      e.preventDefault();
  }}
  return (
    <div className="ListBody ">
    <h1>TO-DO LIST</h1>
    <h6>A place to manage all of your task</h6>
    <form onSubmit={handleSubmit} className='myForm' >
    <input className="inp" onChange={handleChange} value={value} type="text" placeholder="add item"/> 
    <button className="but" id='butid' type='submit'>
      Add
      </button>
    </form><ToastContainer/> </div>
    
  )
}

export default TodoForm
