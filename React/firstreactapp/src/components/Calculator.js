import React,{useState} from 'react'
import "./Calculator.css"
function Calculator() {
    const [calculation, setCalculation]=useState('')
    const [output, setOutput]=useState('')
    const actions = ['/', '*', '+', '-', '.']

    const updateCalculation=(value)=>{
        //i)avoid operator entered in empty list; ii) avoid 2 operators
 
        if(actions.includes(value) & calculation === '' || actions.includes(value) & actions.includes(calculation.slice(-1))){
            return
        }
        setCalculation(calculation+value)

            if (!actions.includes(value)){
                setOutput(eval(calculation+value).toString())
            }
            else{
                setOutput((calculation+value).toString())
            }
    }

   const createDigits =()=>{
        const digits=[]

        for (let i=0;i<10; i++){
            digits.push(
                <button onClick={()=>updateCalculation(i)} key={i}>{i}</button>
            )
        }
        return digits
   }

    const calculate=()=>{
           setCalculation(eval(calculation).toString())
 
    }

    const backspace=()=>{
        if(calculation === ''){
            return
        }
        const value=calculation.slice(0,-1)   
        setCalculation(value)
        if (actions.includes(value.slice(-1))){
            setOutput(" ")
        }
        else{
            setOutput(eval(value))
        }
        
    }

    const clear=()=>{
        if(calculation === ''){
            return
        }     
        setCalculation(" ")
        setOutput(" ")
    }

    

  return (

    <div>
        <center> <h1> Calculator </h1></center>
        <div className="calculator">
            <div className='result' >
                {calculation}
                <br></br>
                {output ? <span className="output">{output}</span>:<span className="output">{setOutput("0")}</span>}
            </div>

            <div>
                 <div className='operators_and_numbers'>     
                    <button onClick={()=>{updateCalculation('/')}} >/</button>
                    <button onClick={()=>{updateCalculation('*')}}>*</button>
                    <button onClick={()=>{updateCalculation('+')}}>+</button>
                    <button onClick={()=>{updateCalculation('-')}}>-</button>
                </div>

                <div className='operators_and_numbers'>        
                    {createDigits()}
                    <button onClick={()=>{updateCalculation('.')}}>.</button>
                    {/* <button onClick={()=>{updateCalculation('0')}}>0</button> */}
                    <button onClick={calculate}>=</button>
                </div>
                <div className='clear'>
                    <button onClick={backspace}>❌</button>
                    <button onClick={clear} >🗑️</button>
                </div>

            </div>


        </div>
    </div>
  );

}


export default Calculator