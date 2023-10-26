import { useEffect, useState } from 'react'
import Static from './assets/img.jpg'
import './App.css'
import CountUp from 'react-countup'

function App() {
  return (
    <>
      <img
        src={Static}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      ></img>
    </>
  )
}

export default App
