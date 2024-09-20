import React, { useEffect } from 'react'
import App from '../App'
import TodoForm from './TodoForm'
import { useState } from 'react';
import List from './List';
import EditForm from './EditForm';
import Bin from './Bin';



const TodoWrapper = () => {
  const [arrTodos, setArrTodos] = useState([]);
  

  useEffect(() => {
    const localData = JSON.parse(localStorage.getItem('arrTodos'));
    return localData ? setArrTodos(localData) : [];
  }, [])

  useEffect(() =>{
    localStorage.setItem('arrTodos', JSON.stringify(arrTodos))}, [arrTodos]);
   
  const addItem = todo => {
    const d = new Date();
    let time = d.getTime();
    setArrTodos([...arrTodos, {id: time, task: todo,
    completed: false, isEditing: false
    }])
    console.log(arrTodos)
  }
  const toggleComplete = id => {
    setArrTodos(arrTodos.map(todo => todo.id === id ? 
  {
    ...todo, completed: !todo.completed} : todo
  ))
  }
  const deleteTodo = id => {
    setArrTodos(arrTodos.filter(todo => todo.id !== id))
  }


  const editTodo = id => {
    setArrTodos(arrTodos.map(todo => todo.id === id ? {
      ...todo, isEditing: !todo.isEditing} : todo))
  }

  const editTask = (task, id) => {
    setArrTodos(arrTodos.map(todo => todo.id === id ? {
      ...todo, task, isEditing : !todo.isEditing
    } : todo
    ))
  }
  return (
    <div>
    <TodoForm addItem = {addItem} />
    {arrTodos.map((todo, index) => ( todo.isEditing ? (<EditForm  editItem={editTask} task={todo}/>) : (
        <List task={todo} key={index} toggleComplete= {toggleComplete}
         deleteTodo= {deleteTodo} editTodo={editTodo} />
        )
    ))}
    </div>
  )
}

export default TodoWrapper
