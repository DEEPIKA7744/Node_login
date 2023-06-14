import React,{useState} from 'react'

function HookComponents() {
//while using arrays and obj spread the state variable
    const [items, setItems] =useState([])
        
        const addItem=()=>{
            setItems([...items,{
                id:items.length,
                value:Math.floor(Math.random()*10)+1
            }]) 
        }
        return (
            <div>
                <button onClick={addItem}>Add a number</button>
                <ul>
                    {
                        items.map(item=>(
                            <li key={item.id}>{item.value}</li>
                        ))}
                </ul>
            </div>

        )
/*using current value count */
    // const [count,setCount] =useState(0)
    // return (
    //    <div>
    //      <button onClick={()=>setCount(count+1)}>Count {count}</button>
    //    </div>
    // )

      

/* using object*/
    // const [name,setName] =useState({firstName: '',lastName:' '})
    // return (
    //     <form>
    //         <input type='text' value={name.firstName} onChange={e => setName({...name, firstName: e.target.value })} />
    //         <input type='text' value={name.lastName} onChange={e => setName({ ...name,lastName: e.target.value })} />
    //         <h2>Your name is {name.firstName}</h2>
    //         <h2>Your name is {name.lastName}</h2>
    //     </form>
        
    // )  
/*using previous value count */
        // const initialCount = 0
        // const [count,setCount] =useState(initialCount)
        // const incrementFive=()=>{
        //     for(let i=0;i<5;i++){
        //         setCount(prevCount=>prevCount+1)
        //     }
        // }
        // return(
        //     <div>
        //         Count - {count}
        //         <button onClick={()=>setCount(initialCount)}>Reset</button>
        //         <button onClick={()=>setCount(prevCount=>prevCount+1)}>Increment</button>
        //         <button onClick={()=>setCount(prevCount=>prevCount-1)}>Decrement</button>
        //         <button onClick={(incrementFive)}>Increment 5</button>
        //     </div>
        // )


            
            
}
export default HookComponents
