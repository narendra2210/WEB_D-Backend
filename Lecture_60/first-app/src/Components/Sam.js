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