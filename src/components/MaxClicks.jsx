import {useState, useEffect} from 'react'
function MaxClicks() {
    const [countdown, setCountdown] = useState(10);
    const [click, setClick] = useState(0);
    useEffect(()=>{
        window.ticker = setInterval(()=>{
            setCountdown(countdown => countdown -= 1);
          },1000);
        
        return () => {
          clearInterval(window.ticker)
        };
    },[])

    useEffect(()=>{
        if(countdown < 1){
          clearInterval(window.ticker)
        }
    }, [countdown])
  return (
    <div>
      <h3>Click as many times until timer expires. Refresh page if timer is 0</h3>
      {countdown}
      {countdown > 0 &&
      <button className="secondary" onClick={()=>{setClick(click => click+1)}}>{click}</button>}
    </div>
  )
}

export default MaxClicks
