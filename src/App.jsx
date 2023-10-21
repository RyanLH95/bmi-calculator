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
    event.preventDefault();

    if (weight === 0 || height === 0) {
      alert('A valid number must be entered to proceed with calculation')
    } else {
      let result = (weight / (height * height) * 10000)
      setResult(result.toFixed(1))

      if (result < 18.5) {
        setMessage('You are underweight')
      } else if (result >= 18.5 && result < 24.9) {
        setMessage('You are at a healthy weight')
      } else if (result >= 25 && result < 29.9) {
        setMessage('You are overweight')
      } else {
        setMessage('You are obese')
      }
     }
  }
  
  // this function is to clear result of bmi
  let reload = () => {
    window.location.reload()
  }
  
  return (
    <>
      <div className="app">
        <div className="container">
          <h2 className="center">BMI Calculator</h2>
          <form id="bmi-form"
                onSubmit={calculate}>
            <div>
              <label>Height (cm)
                <input value={height} onChange={(event) => setHeight(event.target.value)}/> 
              </label>
            </div>
            <div>
              <label>Weight (kg)
                <input value={weight} onChange={(event) => setWeight(event.target.value)}></input>
              </label>
            </div>
            <div>
              <button className="btn" type="submit">Submit</button>
              <button className="btn btn-outline" onClick={reload} type="submit">Reload</button>
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
