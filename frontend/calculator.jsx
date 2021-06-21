import React from 'react';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = { result: 0, num1: "", num2: "" };

    this.setNum1 = this.setNum1.bind(this);
    this.setNum2 = this.setNum2.bind(this);
    this.reset = this.reset.bind(this);
  }

  setNum1(event) {
    event.preventDefault();
    const num1 = this.state.num1;
    this.setState(num1);
  }

  setNum2(event) {
    event.preventDefault();
    const num2 = this.state.num2;
    this.setState(num2);
  }

  reset(event) {
    event.preventDefault();
    this.setState({num1: '', num2: ''});
  }

  render() {
    return (
      <div>
        <h1>{this.state.result}</h1>
        <input type="text" onChange={this.setNum1} value={this.state.num1}></input>
        <input type="text" onChange={this.setNum2} value={this.state.num2}></input>
        <button onClick={this.reset}>Clear</button>
      </div>
    );
  }
}


export default Calculator;