import React from "react";
import { connect } from "react-redux";

class Counter extends React.Component {
  render() {
    return <div>{this.props.counter}</div>;
  }
}

function mapStateToProps(state) {
  return {
    counter: state.counter
  };
}

export default connect(mapStateToProps)(Counter);
