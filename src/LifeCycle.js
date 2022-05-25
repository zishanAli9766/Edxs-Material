
import React, { Component } from "react";

export class LifeCycle extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
    console.log("Cons Executed");
  }

  componentWillMount() {
    console.log("Component   Will Mount");
  }

  componentDidMount() {
    console.log("Component   DID Mount");
  }

  //   static getDerivedStateFromProps(props, state) {
  //     console.log("getDerivedStateFromProps Called");
  //     return null;
  //   }

  shouldComponentUpdate() {
    console.log("Component SHOULD Update : ", this.state);
    return true;
  }

  componentWillUpdate() {
    console.log("Component WILL Update");
  }

  componentDidUpdate() {
    console.log("Component Did Update");
  }

  add = () => {
    this.setState((prevState) => ({
      ...prevState,
      count: prevState.count + 1,
    }));
    console.log(this.state);
  };

  render() {
    console.info("Render executed");
    return (
      <div >
        <h1>React Life Cycle Methods {this.state.count}</h1>
        {/* {this.state.count  } */}
        <button onClick={this.add}> + Incr</button>
      </div>
    );
  }
}

export default LifeCycle;