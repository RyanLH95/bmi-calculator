import React, { useState } from 'react'
import './App.css'

let imgSrc = ''

function App() {
  // 4 states for calculator goes here
  const [height, setHeight] = useState(0)
  const [weight, setWeight] = useState(0)
  const [bmi, setBmi] = useState('')
  const [message, setMessage] = useState('')

  return (
    <>
      <div className="App">
        <div className="container">
          <h2 className="center">BMI Calculator</h2>
          <form>
            <div>
              <label>Height (cm)</label>
              <input defaultValue={height} />
            </div>
            <div>
              <label>Weight (kg)</label>
              <input defaultValue={weight}></input>
            </div>
            <div>
              <button className="btn" type="submit">Submit</button>
              <button className="btn btn-outline" type="submit">Reload</button>
            </div>
          </form>
          
          <div className="center">
            <h3>Your BMI is: {bmi}</h3>
            <p>{message}</p>
          </div>

          <div className="img-container">
            <img src={imgSrc} alt=''></img>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
