import React from 'react'

const Person = (props) => {
  let namee = props.name;
  function handleClick(){
    namee = "anonymous";
    // console.log("Clicked");
    console.log(namee);
  }
  return (
    <div>
      <div onClick={handleClick}>I m a div click on me</div>


    {/* <h1>Hi i am inside Person component</h1>
    <h2>Narendra Singh</h2>
    <h3>age : 20</h3> */}

    {/* <h1>Name : {props.name}</h1> */}
    <h1>Name : {namee}</h1>
    <h2>Age : {props.age}</h2>
    <h3>FavColor : {props.colorFav}</h3>
    </div>
  )
}

export default Person