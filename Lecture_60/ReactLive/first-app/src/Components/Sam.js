import React from 'react'

let arr = ["😁" , "😂" , "❤️" , "😍" , "😒" , " 💕"];

let emoji = Math.floor(Math.random()*6);

const Sam = () => {
  return (
    <div>
        <h1>Hi this is sam file</h1>
        <h1>
            {    arr[emoji]    }
        </h1>
    </div>
  )
}

export default Sam