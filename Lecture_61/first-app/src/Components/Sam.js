import React from 'react'

let arr = ["😁" , "😂" , "❤️" , "😍" , "😒" , " 💕"];

let todos = ['day1' , 'day2' , 'day3' , 'day4'];

let emoji = Math.floor(Math.random()*6);

const Sam = () => {
  return (
    <div>
        <h1>Hi this is sam file</h1>
        <h1>
            {    arr[emoji]    }

            {/* This is ternary operator  */}
            {
              emoji === 3 ? 
              <img src='https://plus.unsplash.com/premium_photo-1709311452215-496c6740ca59?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHx8' alt='Boy'/>
              : "Tumse na hoga"
            }

            {/* This is map function for looping  */}
            {
              todos.map((item,index)=>{
                return <li key={index}>My task is {item} and my index is {index}</li>
              })
            }
        </h1>
    </div>
  )
}

export default Sam