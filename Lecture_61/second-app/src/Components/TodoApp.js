import React , {useEffect, useState} from 'react';
import Form from './Form';
import TodoList from './TodoList';
// import { v4 as uuid } from 'uuid';

const TodoApp = () => {
    // let arrayDummy = [
    //     {
    //         id : uuid(),
    //         todo : "Moj kar"
    //     },
    //     {
    //         id : uuid(),
    //         todo : "Video upload"
    //     },
    //     {
    //         id : uuid(),
    //         todo : "practice kro"
    //     },
    //     {
    //         id : uuid(),
    //         todo : "code push krdo"
    //     }
    // ]

  const arrayDummy = JSON.parse(localStorage.getItem('todos') || "[]");

  const [todos , setTodos] = useState(arrayDummy);


  const addTodo = (todo)=>{
    // spread operator is used here to join arraydummy and newTodo
    setTodos([...todos , todo])
  }

  // console.log("inside the App component");

  useEffect(()=>{
    localStorage.setItem('todos' , JSON.stringify(todos));
    // console.log("inside useEffect hook")
  },[todos])

  // const deleteTodo = (id)=>{
  //   const newTodos = todos.filter((todo)=>todo.id !== id);
  //   setTodos(newTodos);
  // }
  // a better way is shown below
  const deleteTodo = (id)=>{
    setTodos((prevState)=>{
      return prevState.filter((todo)=>todo.id !== id)
    })
  }

  const checkTodo = (id)=>{
    setTodos((prevState)=>{
      return prevState.map((item)=>item.id === id ? {...item,checked: !item.checked} : item);
    })

  }



  return (
    <div>
        {/* <TodoList todos={arrayDummy} /> */}
      <h1 style={{textAlign:'center'}} >Todo List for Samarth</h1>

        <Form addTodo={addTodo} todos={todos}  />
        <TodoList todos={todos} deleteTodo={deleteTodo} checkTodo={checkTodo} />
    </div>
  )
}

export default TodoApp