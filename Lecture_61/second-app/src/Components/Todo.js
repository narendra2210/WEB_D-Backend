import React from 'react'
import {BsTrashFill} from 'react-icons/bs'

const Todo = (props) => {
  return (
    <div>
        <li>
            <p>Index : {props.index} --&gt; ID : {props.id} --Task: {props.todo}
             <span> <BsTrashFill /> </span>
            </p>
        </li>
    </div>
  )
}

export default Todo