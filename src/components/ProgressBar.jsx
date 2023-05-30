import {useState} from 'react'
function ProgressBar() {
    const [percentage, setPercentage] = useState();
    return (
    <div>
        <h3>ProgressBar: Fills accordig to input value</h3>
      <progress max="100" min="1" value={percentage}/>
      <div className='grid'>
      <label htmlFor="number">Input:</label>
      <input type="number" name="number" id="number" max="100" min ='0' maxLength='2' onChange={(e)=>{setPercentage(e.target.value)}} placeholder="30%"/>
      </div>
    </div>
  )
}

export default ProgressBar
