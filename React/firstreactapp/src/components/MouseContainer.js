import React ,{useState}from 'react'
import HookCounterEf from './HookCounterEf'

function MouseContainer() {
  const [display,setDisplay] =useState(true)
  return (
    <div>
      <button onClick={()=>setDisplay(!display)}>Toggle Display</button>
      {display && <HookCounterEf></HookCounterEf>}
    </div>
  )
}

export default MouseContainer
