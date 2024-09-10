import React from 'react'
import Task from './Task'

export default function TaskList({tasks}) {
  return (
    <div>
        <h1>Task List Given Below</h1>
        {tasks.map((task,index)=>{
            return <Task key={index} task={task}/>
        })}
    </div>
  )
}
