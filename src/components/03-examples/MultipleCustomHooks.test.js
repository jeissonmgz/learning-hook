const { shallow } = require("enzyme");
const { default: MultipleCustomHooks } = require("./MultipleCustomHooks");
import React from "react";
import { useFetch } from "../../hooks/useFetch";
import { useCounter } from "../../hooks/useCounter";
jest.mock("../../hooks/useFetch");
jest.mock("../../hooks/useCounter");

describe("<MultipleCustomHooks />", () => {
  useCounter.mockReturnValue({
    counter: 1,
    increment: () => {},
    decrement: () => {},
    reset: () => {},
  });
  test("should initialize", () => {
    useFetch.mockReturnValue({ data: null, loading: true, error: null });
    const wrapper = shallow(<MultipleCustomHooks />);
    expect(wrapper).toMatchSnapshot();
  });

  test("should show data", () => {
    useFetch.mockReturnValue({
      data: [
        {
          author: "Jeisson",
          quote: "123",
        },
      ],
      loading: false,
      error: null,
    });
    const wrapper = shallow(<MultipleCustomHooks />);
    expect(wrapper.find(".alert").exists()).toBe(false);
    expect(wrapper.find(".mb-0").text().trim()).toBe("123");
    expect(wrapper.find("footer").text().trim()).toBe("Jeisson");
  });
});
