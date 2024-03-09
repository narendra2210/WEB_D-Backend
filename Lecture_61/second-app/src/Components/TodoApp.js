import React from 'react'
import TodoList from './TodoList'

const TodoApp = () => {
    let arrayDummy = [
        {
            id : 0,
            todo : "Moj kar"
        },
        {
            id : 1,
            todo : "Video upload"
        },
        {
            id : 2,
            todo : "practice kro"
        },
        {
            id : 3,
            todo : "code push krdo"
        }
    ]

  return (
    <TodoList todos={arrayDummy} />
  )
}

export default TodoApp