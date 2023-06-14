import React, { useState,useEffect} from 'react'

function HookCounterEf() {
    // const [count,setCount] =useState(0)
    // const [name,setName] = useState('')
    // useEffect(()=>{
    //     console.log('Updating title')
    //     document.title =`You clicked ${count} times`
    // },[count])//conditionally run  vlaues on the count depends on it run betwween the render runs
    // return (
    //     <div>
    //         <input type='text' value={name} onChange={e=>{setName(e.target.value)}}></input>
    //         <button onClick={()=>setCount(count+1)}>Click {count} times</button>
    //     </div>
    // )

    const [x,setX]= useState(0)
    const [y,setY]= useState(0)
  
    const logMousePosition = e=>{
        console.log('Mouse Event')
        setX(e.clientX)
        setY(e.clientY)
    }


    useEffect(()=>{
        window.addEventListener('mousemove',logMousePosition)
         //this return unmount and cleanup code 
        return ()=>{
            console.log('component unmounting code')
            window.removeEventListener('mousemove',logMousePosition)
        }
    },[])//empty array to run effect only once after render
    return(
        <div>
            X - {x} Y{y}
        </div>
    )
} 

export default HookCounterEf
