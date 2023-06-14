import React,{Component, createRef} from "react";


//function Greet1(){
//    return <h1>Hello using functional component</h1>
// }

// const Hello =()=>{
//       return React.createElement(
//             'div',
//             {id:'hello',className:'dummyclass'},
//             React.createElement('h1',null,'USING create element')
//             );
//       }
const Greet = (props)=>{
      
       const Hello1=(n)=>{
            console.log(n);
            // alert("Hello "+n)
            return "Hello "+n             
            
      }
      return (
            <div>
            <h1>Hello {props.name} a.k.a {props.heroName} </h1>
            {props.children}
            {/* <button onClick={()=>Hello1(props.name)}>button1</button> */}
            <h2>{Hello1(props.name)}</h2>
            
            </div>
            
      )
}

export default Greet;