import React from 'react'
import Todo from './Todo'

const TodoList = (props) => {

    const allTodos = props.todos.map((item,index)=>{
        return <Todo id={item.id} todo={item.todo} index={index}/>
    })

  return (
    <section>
        <ul>
            {allTodos}
        </ul>
    </section>
  )
}

export default TodoList