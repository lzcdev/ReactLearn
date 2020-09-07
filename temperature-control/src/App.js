import React, { useState } from 'react'

const App = () => {
  const [temperatureValue, setTemperatureValue] = useState(10)
  const [temperatureColor, setTemperatureColor] = useState('cold')

  const increaseTemperature = () => {
    setTemperatureValue(temperatureValue + 1)

    if (temperatureValue >= 15) {
      setTemperatureColor('hot')
    }

    if (temperatureValue >= 30) {
      setTemperatureValue(30)
    }
  }
  const decreaseTemperature = () => {
    setTemperatureValue(temperatureValue - 1)
    if (temperatureValue < 15) {
      setTemperatureColor('cold')
    }
    if (temperatureValue <= -30) {
      setTemperatureValue(-30)
    }
  }

  return (
    <div className="app-container">
      <div className="temperature-display-container">
        <div className={`temperature-display ${temperatureColor}`}>
          {temperatureValue}°C
        </div>
      </div>
      <div className="button-container">
        <button onClick={increaseTemperature}>+</button>
        <button onClick={decreaseTemperature}>-</button>
      </div>
    </div>
  )
}

export default App
