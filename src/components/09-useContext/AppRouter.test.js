const { shallow } = require("enzyme");
import React from "react";
import { AppRouter } from "./AppRouter";
import { UserContext } from "./UserContext";

describe("<AppRouter />", () => {
  const user = {
    name: "Messi",
    email: "messi@barcelona.com",
  };
  const wrapper = shallow(
    <UserContext.Provider value={{ user }}>
      <AppRouter />
    </UserContext.Provider>
  );
  test("should show", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
