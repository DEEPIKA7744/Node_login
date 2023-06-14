import React, { Component } from 'react'
import './myStyle.css'
var styleinp={color:'blue'}
class Form extends Component {
 
    constructor(props) {
      super(props)
    
      this.state = {
         username : '',
         comments: '',
         topic: 'react'
      }
      
    }
    handlerUsernameChange = (event)=>{
        this.setState({
            username: event.target.value
        })
      }
      handlerCommentsChange=(event)=>{
        this.setState({
            comments: event.target.value
        })
      }
      handlerTopicChange = (event)=>{
        this.setState({
            topic: event.target.value
        })
      }
      handlerSubmit = event =>{
        if(`${this.state.username}` && `${this.state.comments}` )
         alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
        else
        alert("please enter the details")
      }
  render() {
    return (
      <form className='form' onSubmit={this.handleSubmit}>
        <div>
            <label className='user_name' >UserName :   </label>
            <input className='user_box' type='text' value={this.state.username} onChange={this.handlerUsernameChange}></input>
        </div>
        <div>
            <label className='comments'>Comments :</label>
            <textarea className='comment_box' value={this.state.comments} onChange={this.handlerCommentsChange}></textarea>
        </div>
        <div>
            <label className='topic'>Topic :</label>
            <select value={this.state.topic} onChange={this.handlerTopicChange}>
                <option value="react">React</option>
                <option value="java">Java</option>
                <option value="node">NodeJs</option>
            </select>
        </div>
        <div>
            <button type='submit' onClick={this.handlerSubmit} style={styleinp}>Submit</button>
        </div>
      </form>
    )
  }
}

export default Form
