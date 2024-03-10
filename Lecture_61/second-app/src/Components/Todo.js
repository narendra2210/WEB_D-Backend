import React from 'react'
import {BsTrashFill} from 'react-icons/bs'

const Todo = (props) => {
  function deleteTodoHandler(id){
    props.deleteTodo(id);
  }
  return (
    <div>
        <li>
            <p>Index : {props.index} --&gt; ID : {props.id} --Task: {props.todo}
             <span onClick={()=>deleteTodoHandler(props.id)}> <BsTrashFill /> </span>
            </p>
        </li>
    </div>
  )
}

export default Todo