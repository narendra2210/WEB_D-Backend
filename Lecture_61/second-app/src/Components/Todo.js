import React from 'react'

const Todo = (props) => {
  return (
    <div>
        <li>
            <p>Index : {props.index} --&gt; ID : {props.id} --Task: {props.Todo}</p>
        </li>
    </div>
  )
}

export default Todo