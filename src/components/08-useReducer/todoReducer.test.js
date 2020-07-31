const { todoReducer } = require("./todoReducer");
const { demoTodos } = require("../../fixtures/demoTodos");

describe("todoReducer", () => {
  test("should return default", () => {
    const state = todoReducer(demoTodos, {});
    expect(state).toEqual(demoTodos);
  });
  test("should add todo", () => {
    const newTodo = {
      id: 3,
      desc: "Learn SASS",
      done: false,
    };
    const state = todoReducer(demoTodos, {
      type: "add",
      payload: newTodo,
    });
    expect(state.length).toBe(3);
    expect(state).toEqual([...demoTodos, newTodo]);
  });

  test("should Delete", () => {
    const state = todoReducer(demoTodos, {
      type: "delete",
      payload: 1,
    });
    expect(state.length).toBe(1);
    expect(state).toEqual([
      {
        id: 2,
        desc: "Learn Mongo",
        done: false,
      },
    ]);
  });

  test("should Toogle", () => {
    const state = todoReducer(demoTodos, {
      type: "toggle",
      payload: 1,
    });
    expect(state[0].done).toBe(true);
    expect(state[1]).toEqual(demoTodos[1]);
  });
});
