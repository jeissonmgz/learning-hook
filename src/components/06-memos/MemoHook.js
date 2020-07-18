import React, { useState, useMemo } from "react";

import "../02-useEffect/effect.css";
import { useCounter } from "../../hooks/useCounter";
import { processHeavy } from "../../helpers/processHeavy";

export const MemoHook = () => {
  const { counter, increment } = useCounter(1000);
  const [show, setShow] = useState(true);

  const memoProcessHeavy = useMemo(() => processHeavy(counter), [counter]);

  return (
    <>
      <h1>Memo Hook</h1>
      <h3>
        Counter: <small>{counter}</small>
      </h3>
      <hr />
      <p>{memoProcessHeavy}</p>
      <button className="btn btn-primary" onClick={increment}>
        +1
      </button>
      <button
        className="btn btn-outline-primary ml-3"
        onClick={() => setShow(!show)}
      >
        Show / Hide {JSON.stringify(show)}
      </button>
    </>
  );
};
