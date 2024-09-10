import React from 'react'

export default function Task({task}) {
  return (
    <div>
        <h1>{task.title}</h1>
        <p>{task.description}</p>
        <p>Due Date:{new Date(task.dueDate).toLocaleDateString()}</p>
        <p>Priority : {task.priority}</p>
        <button>Mark as completed/Incompleted</button>
        <button>Delete</button>
    </div>
  )
}
