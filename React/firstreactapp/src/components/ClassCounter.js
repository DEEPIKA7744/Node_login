import React, { Component } from 'react'

class ClassCounter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0,
         x: 0,
         y: 0
      }
    }
    logMousePosition = e =>{
      this.setState({x:e.clientX , y:e.clientY})
    }

    // componentDidMount(){
    //   window.addEventListener('mousemove',this.logMousePosition)
    //     document.title =`Cliclked ${this.state.count} times`
    // }
    // componentDidUpdate(prevProps,prevState){
      
    //   if(prevProps.count === this.state.count){
    //     console.log('Updating document Title')
    //   }
    //     document.title =`Clicked ${this.state.count} times`
    // }
  render() {
    return (
      <div>
        {/* <input type='text' value={this.state.name} onChange={e=>{this.setState({name:e.target.value})
      }}/>
        <button onClick={()=>this.setState({count:this.state.count+1})}>Click {this.state.count}times</button> */}
        x-{this.state.x} y-{this.state.y}
      </div>
    )
  }
}

export default ClassCounter
