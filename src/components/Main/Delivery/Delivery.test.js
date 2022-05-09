import React from "react";
import { render, screen } from '@testing-library/react';
import Delivery from "./Delivery";

describe("Delivery", () => {
  test("matches snapshot", () => {
    render(<Delivery />);
    expect(screen).toMatchSnapshot();
  });
});
