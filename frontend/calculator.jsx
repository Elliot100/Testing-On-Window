import React from 'react';

class Calculator extends React.Component {
  constructor() {
    super();
    this.state = { result: 0, num1: "", num2: "" };

    this.setNum1 = this.setNum1.bind(this);
    this.setNum2 = this.setNum2.bind(this);
    this.reset = this.reset.bind(this);
    this.add = this.add.bind(this);
    this.sub = this.sub.bind(this);
    this.mul = this.mul.bind(this);
    this.div = this.div.bind(this);
  }

  setNum1(event) {
    const num1 = event.target.value ? parseInt(event.target.value) : "";
    this.setState({ num1 });
  }

  setNum2(event) {
    const num2 = event.target.value ? parseInt(event.target.value) : "";
    this.setState({ num2 });
  }

  reset(event) {
    event.preventDefault();
    this.setState({ num1: "", num2: "" });
  }

  add(e) {
    e.preventDefault();
    const result = this.state.num1 + this.state.num2;
    this.setState({ result });
  }
  
  sub(e) {
    e.preventDefault();
    const result = this.state.num1 - this.state.num2;
    this.setState({ result });
  }

  mul(e) {
    e.preventDefault();
    const result = this.state.num1 * this.state.num2;
    this.setState({ result });
  }

  div(e) {
    e.preventDefault();
    const result = this.state.num1 / this.state.num2;
    this.setState({ result });
  }

  render() {
    const { num1, num2, result } = this.state;
    return (
      <div>
        <h1>{result}</h1>
        <input onChange={this.setNum1} value={num1} />
        <input onChange={this.setNum2} value={num2} />

        <button onClick={this.reset}>Clear</button>
        <br />
        <button onClick={this.add}>+</button>
        <button onClick={this.sub}>-</button>
        <button onClick={this.mul}>*</button>
        <button onClick={this.div}>/</button>
      </div>
    );
  }
}


export default Calculator;