import React, { Component } from 'react'

class UserGreetingIf extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn : false
      }
    }
    
//   render() {
//     if(this.state.isLoggedIn){
//         return <div>Welcome Deepika</div>
//     }
//     else{
//         return <div>Welcome Guest</div>
//     }
   
//   }
    render(){
        return this.state.isLoggedIn?(
            <div>Welcome Deepzzzzz</div>
        ):(<div>Welcome Guest</div>)
    }
}

export default UserGreetingIf
