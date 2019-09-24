import React from "react";
import { connect } from "react-redux";
import { addCounter } from "./store";
import Counter from "./components/Counter";
class App extends React.Component {
  handleClick() {
    const { dispatch } = this.props;
    dispatch(addCounter());
  }

  render() {
    return (
      <div className="App">
        <button onClick={() => this.handleClick()}>Sumar</button>
        <Counter />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    counter: state.counter
  };
}
export default connect(mapStateToProps)(App);
