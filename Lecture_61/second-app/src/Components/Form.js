import React, { useState } from 'react'

const Form = (props) => {
    let [input , setInput] = useState('');

    function inputChangeHandler(e){
        setInput(e.target.value);
    }

    function formSubmitHandler(e){
        // Baar baar reload hone se rokega or submit hone se bhi
        e.preventDefault();

        const newTodo = {
            id : props.todos.length,
            todo : input
        }

        props.addTodo(newTodo);
        console.log(input);
        setInput('');
    }


  return (
    <Form onSubmit={formSubmitHandler} >
        <input onChange={inputChangeHandler} type='text' placeholder='Enter your task' value={input} />
    </Form>
  )
}

export default Form