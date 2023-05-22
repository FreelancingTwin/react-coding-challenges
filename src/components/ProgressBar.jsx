import {useState} from 'react'
function ProgressBar() {
    const [percentage, setPercentage] = useState(30);
    return (
    <div>
        <h3>ProgressBar: Changes accordig to input value</h3>
      <progress max="100" min="1" value={percentage}/>
      <input type="number" name="number" id="number" max='100' min = '0' onChange={(e)=>{setPercentage(e.target.value)}} placeholder="30%"/>
    </div>
  )
}

export default ProgressBar
