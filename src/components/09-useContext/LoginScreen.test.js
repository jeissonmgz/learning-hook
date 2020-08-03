const { LoginScreen } = require("./LoginScreen");
import React from "react";
import { mount } from "enzyme";
import { UserContext } from "./UserContext";

describe("<LoginScreen />", () => {
  const setUser = jest.fn();

  const wrapper = mount(
    <UserContext.Provider value={{ setUser }}>
      <LoginScreen />
    </UserContext.Provider>
  );

  test("should show", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("should be user", () => {
    wrapper.find("button").prop("onClick")();
    expect(setUser).toHaveBeenCalledTimes(1);
    expect(setUser).toHaveBeenCalledWith({ id: 123, name: "Jase" });
  });
});
