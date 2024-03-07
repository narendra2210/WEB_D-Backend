import React from 'react'

const Person = (props) => {
  return (
    <div>
    {/* <h1>Hi i am inside Person component</h1>
    <h2>Narendra Singh</h2>
    <h3>age : 20</h3> */}

    <h1>Name : {props.name}</h1>
    <h2>Age : {props.age}</h2>
    <h3>FavColor : {props.colorFav}</h3>
    </div>
  )
}

export default Person