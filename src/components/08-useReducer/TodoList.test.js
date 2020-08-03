const { shallow } = require("enzyme");
const { demoTodos } = require("../../fixtures/demoTodos");
import React from "react";
import { TodoList } from "./TodoList";

describe("<TodoList />", () => {
  const handleDelete = jest.fn();
  const handleToggle = jest.fn();
  const wrapper = shallow(
    <TodoList
      todos={demoTodos}
      handleDelete={handleDelete}
      handleToggle={handleToggle}
    />
  );

  test("should show right", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("should hast 2 items", () => {
    const listItems = wrapper.find("TodoListItem");
    const firstItem = listItems.at(0);
    expect(listItems.length).toBe(demoTodos.length);
    expect(firstItem.prop("handleDelete")).toEqual(handleDelete);
  });
});
