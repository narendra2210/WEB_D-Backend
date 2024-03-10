import React, { useState } from 'react'
import { v4 as uuid } from 'uuid';

const Form = (props) => {
    let [input , setInput] = useState('');

    function inputChangeHandler(e){
        setInput(e.target.value);
    }

    function formSubmitHandler(e){
        // Baar baar reload hone se rokega or submit hone se bhi
        e.preventDefault();

        const newTodo = {
            id : uuid(),
            todo : input
        }

        props.addTodo(newTodo);
        console.log(input);
        setInput('');
    }


  return (
    <form onSubmit={formSubmitHandler} >
        <input onChange={inputChangeHandler} type='text' placeholder='Enter your task' value={input} />
    </form>
  )
}

export default Form