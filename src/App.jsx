import { useState } from 'react'
import './App.css'

//IMPORT COMPONENTS:
import ProgressBar from './components/ProgressBar'
import Stopwatch from './components/Stopwatch'
import MaxClicks from './components/MaxClicks'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div  className='container-fluid'>
    <button >Day 1</button>
      <ProgressBar/>
    <button >Day 2</button>
      <Stopwatch/>
    <button >Day 3</button>
      <MaxClicks/>
    </div>
  )
}

export default App
