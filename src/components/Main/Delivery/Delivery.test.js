import React from "react";
import { shallow } from "enzyme";
import Delivery from "./Delivery";

describe("Delivery", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Delivery />);
    expect(wrapper).toMatchSnapshot();
  });
});
