import React from 'react';
import {Routes, Route , Link} from 'react-router-dom';
import Cat from './Components/Pages/Cat';
import Dog from './Components/Pages/Dog';
import Main from './Components/Pages/Main';

const App = () => {
  return (

    <div>

      <nav>
        <ul>
          <li><Link to="/">   Main</Link></li>
          <li><Link to="/cat">Cat </Link></li>
          <li><Link to="/dog">Dog </Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path='/'    element={ <Main /> } />
        <Route path='/cat' element={ <Cat  /> } />
        <Route path='/dog' element={ <Dog  /> } />
      </Routes>

    </div>
  )
}

export default App