import React from "react";
import { shallow, mount } from "enzyme";
import { HomeScreen } from "./HomeScreen";
import { UserContext } from "./UserContext";

describe("<HomeScreen />", () => {
  const user = {
    name: "Messi",
    email: "messi@barcelona.com",
  };
  const wrapper = mount(
    <UserContext.Provider value={{ user }}>
      <HomeScreen />
    </UserContext.Provider>
  );

  test("should show", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
