import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AllCompFileHandler from './Component/AllCompFileHandler'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <AllCompFileHandler />
    </>
  )
}

export default App
