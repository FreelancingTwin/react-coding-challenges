import { useState } from 'react'
import './App.css'

//IMPORT COMPONENTS:
import ProgressBar from './components/ProgressBar'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ProgressBar/>
    </>
  )
}

export default App