import Home from "../pages/index";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";

describe("Home", () => {
  it("renders correct initial  calculator", () => {
    render(<Home />);

    expect(screen.getByText("Custom Calculator")).toBeInTheDocument();

    expect(screen.getByPlaceholderText("Input 1")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Input 2")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Input 3")).toBeInTheDocument();

    expect(screen.getByTestId("Checkbox 1")).toBeInTheDocument();
    expect(screen.getByTestId("Checkbox 2")).toBeInTheDocument();
    expect(screen.getByTestId("Checkbox 3")).toBeInTheDocument();

    expect(screen.getByTestId("add")).toBeInTheDocument();
    expect(screen.getByTestId("substract")).toBeInTheDocument();
    expect(screen.getByTestId("multiply")).toBeInTheDocument();
    expect(screen.getByTestId("divide")).toBeInTheDocument();
  });
});
