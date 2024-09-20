import React from 'react'

const Bin = (task) => {
  return (
    <div id='todoContainer'>
      <div className='todoItem'>
      <p>{task.task}</p>
      </div><div className='images'></div>
      </div>
  )
}

export default Bin
