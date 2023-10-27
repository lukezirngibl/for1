import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [isOn, setIsOn] = useState(true)

  useEffect(() => {
    const intervalId = setInterval(() => {
      const hours = new Date().getHours()
      const minutes = new Date().getMinutes()
      if (isOn && hours >= 23) {
        setIsOn(false)
      } else if (!isOn && hours >= 11 && minutes >= 30) {
        setIsOn(true)
        getDayData()
      }
    }, 60 * 30 * 1000)

    return () => {
      clearInterval(intervalId)
    }
  }, [isOn])

  if (!isOn) {
    return <div />
  }

  return (
    <>
      <div
        style={{
          position: 'fixed',
          opacity: 1,
          top: 0,
          left: 0,
          zIndex: 10000,
          width: '100vw',
          height: '100vh',
        }}
      />
      <video
        src={'/slideshow.mp4'}
        autoPlay
        muted
        loop
        style={{
          position: 'fixed',
          opacity: 1,
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      ></video>
    </>
  )
}

export default App
