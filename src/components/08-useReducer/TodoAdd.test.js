import React from "react";
import { TodoAdd } from "./TodoAdd";
import { shallow } from "enzyme";

describe("<TodoAdd />", () => {
  const handleAddTodo = jest.fn();
  const wrapper = shallow(<TodoAdd handleAddTodo={handleAddTodo} />);

  test("should show rigth", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("shouldn´t call handleAddTodo", () => {
    const formSubmit = wrapper.find("form").prop("onSubmit");
    formSubmit({ preventDefault() {} });
    expect(handleAddTodo).toHaveBeenCalledTimes(0);
  });

  test("should call handleAddTodo", () => {
    const value = "Aprender hooks";
    wrapper
      .find("input")
      .simulate("change", { target: { value, name: "description" } });
    const formSubmit = wrapper.find("form").prop("onSubmit");
    formSubmit({ preventDefault() {} });
    expect(handleAddTodo).toHaveBeenCalledTimes(1);
    expect(handleAddTodo).toHaveBeenCalledWith(expect.any(Object));
    expect(handleAddTodo).toHaveBeenCalledWith({
      desc: value,
      done: false,
      id: expect.any(Number),
    });
    expect(wrapper.find("input").prop("value")).toBe("");
  });
});
