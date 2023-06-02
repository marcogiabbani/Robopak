import React from 'react'
import './styles/App.css'
import LogIn from './components/LogIn'

function App() {
  return (
    <div>

      <div className="container row">
        <div className="hero__img">

          <h1>Hello, world!</h1>
          <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam ipsam
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam ipsam
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam ipsam
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam ipsam
          </p>
        </div>
        <div className='log-in'>
          <LogIn />
        </div>
      </div>
    </div>

  )
}

export default App
