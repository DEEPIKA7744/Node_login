import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }
    }
    increment(){
        // this.setState(
        // {
        //    count: this.state.count + 1
        // },
        // console.log('CallBack value',this.state.count)
        // )
        
    
        // console.log(this.state.count)

    this.setState((prevState) => ({
        count: prevState.count+1
    }))
  }
    // this.setState((prevState)=>({count:prevState.count+1}))

    // console.log(this.state.count)

    
    // }
    incrementFive(){
        this.increment()//1 
    }

  render() {
    return (
      <div>
        <div>
        <h1>Count -{this.state.count}</h1><br></br>
        <button onClick={()=>this.incrementFive()}>INCREMENT</button>
        </div>
        
      </div>
    )
  }
}

export default Counter
