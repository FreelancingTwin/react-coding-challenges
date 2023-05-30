import {useState} from 'react'
function Stopwatch() {
    const [tick, setTick] = useState(0);
    function startTimer(){
        window.timer = setInterval(()=>{
            setTick(tick=>++tick)
        }, 1000)
    }
    function stopTimer(){
        clearInterval(window.timer);
    }
    function resetTimer(){
        clearInterval(window.timer);
        setTick(0);
    }
  return (
    <div>
        <h3>Stopwatch: Click the start button to start</h3>
        <h1>{Math.trunc(tick/60)} mins {tick%60} secs</h1>
        <div className="grid">

      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
      <button onClick={resetTimer}>Reset</button>
        </div>
    </div>
  )
}

export default Stopwatch
