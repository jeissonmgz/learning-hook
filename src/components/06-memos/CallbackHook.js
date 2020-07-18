import React, { useState, useCallback } from "react";

import "./../02-useEffect/effect.css";
import { ShowIncrement } from "./ShowIncrement";

export const CallbackHook = () => {
  const [counter, setCounter] = useState(10);
  const increment = useCallback(
    (num) => {
      setCounter((counter) => counter + num);
    },
    [setCounter]
  );
  return (
    <>
      <h1>Use Callback Hooks: {counter}</h1>
      <hr />
      <ShowIncrement increment={increment} />
    </>
  );
};
