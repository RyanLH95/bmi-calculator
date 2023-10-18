import { useState } from 'react'
import './App.css'

function App() {
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
        </div>
      </div>
    </>
  )
}

export default App
