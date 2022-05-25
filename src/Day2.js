import React, { Component } from "react";
import MyButton from "./MyButton";

class CounterwithProps extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  add = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  remove = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };

  reset = () => {
    this.setState({
      count: 0,
    });
  };

 

  render() {
    return (
      <div>
        <h1>Counter With Props</h1>
        <h2 style={{ padding: 20,
          margin: 2,backgroundColor:'greenyellow'}}>{this.state.count}</h2>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <MyButton color="red" title="Remove Number" onPress={this.remove} />
        
          <MyButton color="green" title="ADD Number" onPress={this.add} />
          <MyButton color="yellow" title="Reset Number" onPress={this.reset} />
        </div>
      </div>
    );
  }
}

export default CounterwithProps;