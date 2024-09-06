import React from 'react'
import Remove from "../images/remove.png";
import editing from "../images/pen.png";

const List = ({task, toggleComplete, deleteTodo, editTodo}) => {
    return (
      <div id='todoContainer'>
      <div className='todoItem'>
      <p onClick={() => toggleComplete(task.id)}  className={`${task.completed ? 'completed': ""}`}>{task.task}</p>
      </div><div className='images'><button onClick={() => deleteTodo(task.id)}><img src={Remove}/></button><button onClick={() => editTodo(task.id)}><img src={editing}/></button></div>
      </div>
    )
  
  
}

export default List
