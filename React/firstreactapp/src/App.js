import './App.css';
import  {Component} from 'react'
// import StyleSheet from './components/StyleSheet';
// import Hello from './components/Greet'
// import List from './components/List';
// import Welcome from './components/Welcome'
// import Greet from './components/Greet'
// import Message from './components/Message';
// import Counter from './components/Counter';
// import FunctionClick from './components/FunctionClick';
// import ClassClick from './components/ClassClick';
// import ParentComponent from './ParentComponent';
// import UserGreetingIf from './components/UserGreetingIf';
// import './appStyle.css'
// // import styles from './appStyle.modules.css'
// import Form from './components/Form';
import HookComponents from './components/HookComponents';
import Calculator from './components/Calculator';
import ClassCounter from'./components/ClassCounter';
import HookCounterEf from './components/HookCounterEf';
import MouseContainer from './components/MouseContainer';
import IntervalClassCounter from './components/IntervalClassCounter';
import DataFetching from './components/DataFetching';


class App extends Component {
  render(){
    return (
      <div className='App'>
        {/* <Form></Form> */}
        {/* <Calculator></Calculator> */}
        {/* <HookComponents></HookComponents> 
        <ClassCounter></ClassCounter>
        <MouseContainer></MouseContainer> 
        <HookCounterEf></HookCounterEf>
        <IntervalClassCounter></IntervalClassCounter>  */}
        <DataFetching></DataFetching>
        {/* <h1 className='error'>Error</h1>
        <h2 className={styles.success}>Success</h2> */}
        {/* <UserGreetingIf></UserGreetingIf>
        <List></List> */}
        {/* <StyleSheet primary={true}></StyleSheet> */}
       {/* <Counter></Counter>
        // <Greet name ="Dharsh" heroName="batman"></Greet> */}
        {/* <p1>This is children</p1>
{/* 
        <Greet name ="Dheeksha"></Greet>
        <Welcome name = "Deekshith" heroName="ironman"></Welcome>     
        <Message></Message>
        <hr></hr>
        <h1>Hover Function</h1>
        <FunctionClick></FunctionClick>
        <ClassClick></ClassClick> */} 
        {/* <ParentComponent></ParentComponent> */}
      </div>
    );
  }

}

export default App; 
