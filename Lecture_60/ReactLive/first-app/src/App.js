import React from 'react'
import Person from './Components/Person'
import Sam from './Components/Sam'

const App = () => {
  return (
    <div>
      <Person name="Sam" age="27" colorFav="Black"/>
      <Person name="Monu" age="20" colorFav="White"/>
      <Sam/>
    </div>
  )
}

export default App