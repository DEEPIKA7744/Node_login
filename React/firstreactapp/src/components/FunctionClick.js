import React from 'react'

function FunctionClick() {
    function clickHandler(){
        console.log('Button clicked')
    }
  return (
    <div>
       <p> Button using functional compo that prints in console</p>
      <button onClick={clickHandler}>Click</button>
    </div>
  )
}

export default FunctionClick
