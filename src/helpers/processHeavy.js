export const processHeavy = (iterations) => {
  for (let i = 0; i < iterations; i++) {
    console.log("Ahí vamos");
  }
  return `${iterations} iteraciones realizadas.`;
};
