const { shallow } = require("enzyme");
const { default: HookApp } = require("./HookApp");
import React from "react";

describe("<HookApp />", () => {
  test("should show Hola Mundo", () => {
    const wrapper = shallow(<HookApp />);
    expect(wrapper).toMatchSnapshot();
  });
});
