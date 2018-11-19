import React, { Component,Fragment } from 'react';
import './App.css';

const Result = ({age}) => {
  return (
    <Fragment>
      <h5>Your age is {age}</h5>
    </Fragment>
  )
}

class App extends Component {
  constructor(){
    super()
    this.state = {
      age:''
    }
  }

  onAgeChange = (event) => {
    this.setState({age:event.target.value})
  }
  
  increaseAge = (event) => {
    //change operator '+' sign to '-' to test functionality that results in fail test
    this.setState({age:Number(this.state.age) + 1})
  }

  decreaseAge = (event) => {
    //change operator '-' sign to '+' to test functionality that results in fail test
    this.setState({age:Number(this.state.age) - 1})
  }

  render() {
    return (
      <div className="App">
        <h1>React testing with jest</h1>
        <div>
          <h4>
            Enter your age: <input type="text" onChange={this.onAgeChange}/>
          </h4>
          <button id='increment' onClick={this.increaseAge}>Increment</button>
          <button id='decrement' onClick={this.decreaseAge}>Decrement</button>
        </div>
        <Result age={this.state.age}/>
      </div>
      
    );
  }
}

export default App;
