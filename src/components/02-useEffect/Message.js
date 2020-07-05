import React, { useEffect } from "react";

export const Message = () => {
  const mouseMove = (e) => {
    const { x, y } = e;
    console.log(`Point (${x},${y})`);
  };
  useEffect(() => {
    window.addEventListener("mousemove", mouseMove);
    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);
  return (
    <>
      <h3>Genial!</h3>
    </>
  );
};
