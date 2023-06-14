import React , {Component} from "react";

class Welcome extends Component{
    render(){
        const {name,heroName} = this.props
        //const {state1,state2} =this.state
        return (
        <div>
            <h1> Class Component welcome js   </h1>
            <h4>Here the names in Welcome lists {name} a.k.a {heroName}</h4>
        </div>
        
        )
    }
}


export default Welcome; 