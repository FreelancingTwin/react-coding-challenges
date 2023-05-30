import { useState } from 'react'
import './App.css'

//IMPORT COMPONENTS:
import ProgressBar from './components/ProgressBar'
import Stopwatch from './components/Stopwatch'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div  className='container-fluid'>
      <ProgressBar/>
      <Stopwatch/>
    </div>
  )
}

export default App
