import React from "react";

class MyButton extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div
        onClick={this.props.onPress}
        style={{
          backgroundColor: this.props.color,
          alignItems: "center",
          justifyContent: "center",
          padding: 20,
          margin: 2,
        }}
      >
        <h1>{this.props.title}</h1>
      </div>
    );
  }
}

export default MyButton;