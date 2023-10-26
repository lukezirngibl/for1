import { useEffect, useState } from 'react'
import './App.css'

function App() {
  return (
    <>
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
