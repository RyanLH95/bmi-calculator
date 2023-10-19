import React, { useState } from 'react'
import './App.css'

let imgSrc = ''

function App() {
  // 4 states for calculator goes here
  const [height, setHeight] = useState(0)
  const [weight, setWeight] = useState(0)
  const [result, setResult] = useState('')
  const [message, setMessage] = useState('')

  let calculate = (event) => {
    // This is here to prevent an invalid input
    event.preventDefault()

    if (weight === 0 || height === 0) {
      alert('A valid number must be entered to proceed with calculation')
    } else {
      let bmi = (weight / (height * height) * 10000)
      setBmi(bmi.toFixed(1))
    }
  }

  return (
    <>
      <div className="app">
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
            <h3>Your BMI is: {result}</h3>
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
