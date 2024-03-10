import React, { useState } from 'react'
import TodoList from './TodoList'
import Form from './Form';
import { v4 as uuid } from 'uuid';

const TodoApp = () => {
    let arrayDummy = [
        {
            id : uuid(),
            todo : "Moj kar"
        },
        {
            id : uuid(),
            todo : "Video upload"
        },
        {
            id : uuid(),
            todo : "practice kro"
        },
        {
            id : uuid(),
            todo : "code push krdo"
        }
    ]

    let [todos , setTodos] = useState(arrayDummy);

    const addTodo = (todo) =>{
        // spread operator is used here to join arraydummy and newTodo
        setTodos([...todos , todo])
    }

    const deleteTodo = (id)=>{
        const newTodo = todos.filter((todo) => todo.id !== id);
        setTodos(newTodo);
    }

  return (
    <div>
        {/* <TodoList todos={arrayDummy} /> */}
        <h1 style={{textAlign:'center'}}>Todo list for Thakur Narendra Singh</h1>
        <Form  todos={todos} addTodo={addTodo} />
        <TodoList todos={todos} deleteTodo={deleteTodo}/>
    </div>
  )
}

export default TodoApp