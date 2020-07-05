import React, { useEffect, useState } from "react";

export const Message = () => {
  const [state, setstate] = useState({ x: 0, y: 0 });
  const { x, y } = state;
  const mouseMove = (e) => {
    const coords = { x: e.x, y: e.y };
    setstate(coords);
  };
  useEffect(() => {
    window.addEventListener("mousemove", mouseMove);
    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);
  return (
    <>
      <h3>
        Genial!
        <p>
          x:{x}, y:{y}
        </p>
      </h3>
    </>
  );
};
