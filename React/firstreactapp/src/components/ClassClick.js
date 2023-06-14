import React, { Component } from 'react'

class ClassClick extends Component {
constructor(props) {
  super(props)

  this.state = {
     message : 'Hello'
  }
  this.clickHandler = this.clickHandler.bind(this)
}

   clickHandler=()=>{
        this.setState({
          message: 'GoodBye!!'
        })
        console.log('Clicked the button')
    }
  render() {
    return (
      <div>
        <p>Button using class compo that prints in console</p>
        <div>{this.state.message}</div>
        <button onClick={this.clickHandler}>Click me!!</button>
      </div>
    )
  }
}

export default ClassClick
