const { TodoListItem } = require("./TodoListItem");
const { shallow } = require("enzyme");
import React from "react";
import { demoTodo } from "./../../fixtures/demoTodo";

describe("<TodoListItem />", () => {
  const handleDelete = jest.fn();
  const handleToggle = jest.fn();
  const wrapper = shallow(
    <TodoListItem
      index={0}
      todo={demoTodo}
      handleDelete={handleDelete}
      handleToggle={handleToggle}
    />
  );

  test("should show rigthly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("should  erase", () => {
    wrapper.find("button").simulate("click");
    expect(handleDelete).toHaveBeenCalledWith(demoTodo.id);
  });

  test("should  toggle", () => {
    wrapper.find("p").simulate("click");
    expect(handleToggle).toHaveBeenCalledWith(demoTodo.id);
  });

  test("should show message", () => {
    const p = wrapper.find("p");
    expect(p.text()).toBe(`${0 + 1}. ${demoTodo.desc}`);
  });

  test("should has class complete if todo.done=true", () => {
    demoTodo.done = true;
    const wrapper = shallow(
      <TodoListItem
        index={0}
        todo={demoTodo}
        handleDelete={handleDelete}
        handleToggle={handleToggle}
      />
    );
    expect(wrapper.find("p").hasClass("complete")).toBe(true);
  });
});
