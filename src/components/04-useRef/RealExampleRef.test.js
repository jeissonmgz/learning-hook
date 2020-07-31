const { RealExampleRef } = require("./RealExampleRef");
import React from "react";
import { shallow } from "enzyme";

describe("<RealExampleTest />", () => {
  const wrapper = shallow(<RealExampleRef />);
  test("should show", () => {
    expect(wrapper).toMatchSnapshot();
  });
  test("should show <MultipleCustomHooks />", () => {
    expect(wrapper.find("MultipleCustomHooks").exists()).toBe(false);
    wrapper.find(".btn").simulate("click");
    expect(wrapper.find("MultipleCustomHooks").exists()).toBe(true);
  });
});
