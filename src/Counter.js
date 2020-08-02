import React from "react";
import { connect } from "react-redux";
import { increment, decrement } from "./actions/counterActions";

class Counter extends React.Component {
  increment = () => {
    this.props.increment();
  };

  decrement = () => {
    this.props.decrement();
  };

  render() {
    return (
      <div className="count">
        <h2>Counter</h2>
        <div>
          <button onClick={this.decrement}>-</button>
          <span>{this.props.count}</span>
          <button onClick={this.increment}>+</button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    count: state.counter.count
  };
}

const mapDIspatchToProps = {
  increment,
  decrement
};
export default connect(
  mapStateToProps,
  mapDIspatchToProps
)(Counter);
