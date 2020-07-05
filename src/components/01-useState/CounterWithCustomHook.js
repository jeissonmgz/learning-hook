import React from "react";
import PropTypes from "prop-types";
import "./counter.css";
import { useCounter } from "../../hooks/useCounter";

const CounterWithCustomHook = (props) => {
  const { state, increment, decrement, reset } = useCounter();
  return (
    <>
      <h1>Counter with Hook: {state}</h1>
      <hr />
      <button className="btn" onClick={() => increment(2)}>
        +1
      </button>
      <button className="btn" onClick={() => reset()}>
        Reset
      </button>
      <button className="btn" onClick={() => decrement(2)}>
        -1
      </button>
    </>
  );
};

CounterWithCustomHook.propTypes = {};

export default CounterWithCustomHook;
