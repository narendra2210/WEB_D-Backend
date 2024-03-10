import React, { useState } from 'react'
import TodoList from './TodoList'
import Form from './Form';

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

    let [todos , setTodos] = useState(arrayDummy);

    const addTodo = (todo) =>{
        // spread operator is used here to join arraydummy and newTodo
        setTodos([...todos , todo])
    }

  return (
    <div>
        {/* <TodoList todos={arrayDummy} /> */}
        <Form addTodo={addTodo} todos={todos}/>
        <TodoList todos={todos} />
    </div>
  )
}

export default TodoApp