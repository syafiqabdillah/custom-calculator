import Home from "../pages/index";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";

describe("Home", () => {
  it("renders correct initial calculator", () => {
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

  it("shows error when only 1 input", () => {
    render(<Home />);

    fireEvent.change(screen.getByPlaceholderText("Input 1"), {
      target: { value: 23 },
    });

    expect(
      screen.getByText("There must be more than one input")
    ).toBeInTheDocument();
  });

  it("shows correct UI when input 1 2 3 is filled", () => {
    render(<Home />);

    fireEvent.change(screen.getByPlaceholderText("Input 1"), {
      target: { value: 1 },
    });
    fireEvent.change(screen.getByPlaceholderText("Input 2"), {
      target: { value: 2 },
    });
    fireEvent.change(screen.getByPlaceholderText("Input 3"), {
      target: { value: 3 },
    });

    expect(
      screen.queryByText("There must be more than one input")
    ).not.toBeInTheDocument();
  });

  it("shows correct UI when input 1 2 is filled", () => {
    render(<Home />);

    fireEvent.change(screen.getByPlaceholderText("Input 1"), {
      target: { value: 1 },
    });
    fireEvent.change(screen.getByPlaceholderText("Input 2"), {
      target: { value: 2 },
    });

    expect(
      screen.queryByText("There must be more than one input")
    ).not.toBeInTheDocument();
  });

  it("shows correct UI when input 1 3 is filled", () => {
    render(<Home />);

    fireEvent.change(screen.getByPlaceholderText("Input 1"), {
      target: { value: 1 },
    });
    fireEvent.change(screen.getByPlaceholderText("Input 3"), {
      target: { value: 3 },
    });

    expect(
      screen.queryByText("There must be more than one input")
    ).not.toBeInTheDocument();
  });

  it("shows correct UI when input 2 3 is filled", () => {
    render(<Home />);

    fireEvent.change(screen.getByPlaceholderText("Input 2"), {
      target: { value: 2 },
    });
    fireEvent.change(screen.getByPlaceholderText("Input 3"), {
      target: { value: 3 },
    });

    expect(
      screen.queryByText("There must be more than one input")
    ).not.toBeInTheDocument();
  });

  describe("operator add", () => {
    it("shows correct result when input 1 2 3 is filled and add is clicked", () => {
      render(<Home />);

      fireEvent.change(screen.getByPlaceholderText("Input 1"), {
        target: { value: 1 },
      });
      fireEvent.change(screen.getByPlaceholderText("Input 2"), {
        target: { value: 2 },
      });
      fireEvent.change(screen.getByPlaceholderText("Input 3"), {
        target: { value: 3 },
      });
      fireEvent.click(screen.getByTestId("add"));

      expect(screen.getByText("Result:")).toBeInTheDocument();
      expect(screen.getByText("6")).toBeInTheDocument();
    });

    it("shows correct result when input 1 2 is filled and add is clicked", () => {
      render(<Home />);

      fireEvent.change(screen.getByPlaceholderText("Input 1"), {
        target: { value: 1 },
      });
      fireEvent.change(screen.getByPlaceholderText("Input 2"), {
        target: { value: 2 },
      });
      fireEvent.click(screen.getByTestId("add"));

      expect(screen.getByText("Result:")).toBeInTheDocument();
      expect(screen.getByText("3")).toBeInTheDocument();
    });

    it("shows correct result when input 1 3 is filled and add is clicked", () => {
      render(<Home />);

      fireEvent.change(screen.getByPlaceholderText("Input 1"), {
        target: { value: 1 },
      });
      fireEvent.change(screen.getByPlaceholderText("Input 3"), {
        target: { value: 3 },
      });
      fireEvent.click(screen.getByTestId("add"));

      expect(screen.getByText("Result:")).toBeInTheDocument();
      expect(screen.getByText("4")).toBeInTheDocument();
    });

    it("shows correct result when input 2 3 is filled and add is clicked", () => {
      render(<Home />);

      fireEvent.change(screen.getByPlaceholderText("Input 2"), {
        target: { value: 2 },
      });
      fireEvent.change(screen.getByPlaceholderText("Input 3"), {
        target: { value: 3 },
      });
      fireEvent.click(screen.getByTestId("add"));

      expect(screen.getByText("Result:")).toBeInTheDocument();
      expect(screen.getByText("5")).toBeInTheDocument();
    });
  });

  describe("operator substrack", () => {
    it("shows correct result when input 1 2 3 is filled and substract is clicked", () => {
      render(<Home />);

      fireEvent.change(screen.getByPlaceholderText("Input 1"), {
        target: { value: 1 },
      });
      fireEvent.change(screen.getByPlaceholderText("Input 2"), {
        target: { value: 2 },
      });
      fireEvent.change(screen.getByPlaceholderText("Input 3"), {
        target: { value: 3 },
      });
      fireEvent.click(screen.getByTestId("substract"));

      expect(screen.getByText("Result:")).toBeInTheDocument();
      expect(screen.getByText("-4")).toBeInTheDocument();
    });

    it("shows correct result when input 1 2 is filled and substract is clicked", () => {
      render(<Home />);

      fireEvent.change(screen.getByPlaceholderText("Input 1"), {
        target: { value: 1 },
      });
      fireEvent.change(screen.getByPlaceholderText("Input 2"), {
        target: { value: 2 },
      });
      fireEvent.click(screen.getByTestId("substract"));

      expect(screen.getByText("Result:")).toBeInTheDocument();
      expect(screen.getByText("-1")).toBeInTheDocument();
    });

    it("shows correct result when input 1 3 is filled and substract is clicked", () => {
      render(<Home />);

      fireEvent.change(screen.getByPlaceholderText("Input 1"), {
        target: { value: 1 },
      });
      fireEvent.change(screen.getByPlaceholderText("Input 3"), {
        target: { value: 3 },
      });
      fireEvent.click(screen.getByTestId("substract"));

      expect(screen.getByText("Result:")).toBeInTheDocument();
      expect(screen.getByText("-2")).toBeInTheDocument();
    });

    it("shows correct result when input 2 3 is filled and substract is clicked", () => {
      render(<Home />);

      fireEvent.change(screen.getByPlaceholderText("Input 2"), {
        target: { value: 2 },
      });
      fireEvent.change(screen.getByPlaceholderText("Input 3"), {
        target: { value: 3 },
      });
      fireEvent.click(screen.getByTestId("substract"));

      expect(screen.getByText("Result:")).toBeInTheDocument();
      expect(screen.getByText("-1")).toBeInTheDocument();
    });
  });

  describe("operator multiply", () => {
    it("shows correct result when input 1 2 3 is filled and multiply is clicked", () => {
      render(<Home />);

      fireEvent.change(screen.getByPlaceholderText("Input 1"), {
        target: { value: 1 },
      });
      fireEvent.change(screen.getByPlaceholderText("Input 2"), {
        target: { value: 2 },
      });
      fireEvent.change(screen.getByPlaceholderText("Input 3"), {
        target: { value: 3 },
      });
      fireEvent.click(screen.getByTestId("multiply"));

      expect(screen.getByText("Result:")).toBeInTheDocument();
      expect(screen.getByText("6")).toBeInTheDocument();
    });

    it("shows correct result when input 1 2 is filled and multiply is clicked", () => {
      render(<Home />);

      fireEvent.change(screen.getByPlaceholderText("Input 1"), {
        target: { value: 1 },
      });
      fireEvent.change(screen.getByPlaceholderText("Input 2"), {
        target: { value: 2 },
      });
      fireEvent.click(screen.getByTestId("multiply"));

      expect(screen.getByText("Result:")).toBeInTheDocument();
      expect(screen.getByText("2")).toBeInTheDocument();
    });

    it("shows correct result when input 1 3 is filled and multiply is clicked", () => {
      render(<Home />);

      fireEvent.change(screen.getByPlaceholderText("Input 1"), {
        target: { value: 1 },
      });
      fireEvent.change(screen.getByPlaceholderText("Input 3"), {
        target: { value: 3 },
      });
      fireEvent.click(screen.getByTestId("multiply"));

      expect(screen.getByText("Result:")).toBeInTheDocument();
      expect(screen.getByText("3")).toBeInTheDocument();
    });

    it("shows correct result when input 2 3 is filled and multiply is clicked", () => {
      render(<Home />);

      fireEvent.change(screen.getByPlaceholderText("Input 2"), {
        target: { value: 2 },
      });
      fireEvent.change(screen.getByPlaceholderText("Input 3"), {
        target: { value: 3 },
      });
      fireEvent.click(screen.getByTestId("multiply"));

      expect(screen.getByText("Result:")).toBeInTheDocument();
      expect(screen.getByText("6")).toBeInTheDocument();
    });
  });

  describe("operator divide", () => {
    it("shows correct result when input 1 2 3 is filled and divide is clicked", () => {
      render(<Home />);

      fireEvent.change(screen.getByPlaceholderText("Input 1"), {
        target: { value: 1 },
      });
      fireEvent.change(screen.getByPlaceholderText("Input 2"), {
        target: { value: 2 },
      });
      fireEvent.change(screen.getByPlaceholderText("Input 3"), {
        target: { value: 3 },
      });
      fireEvent.click(screen.getByTestId("divide"));

      expect(screen.getByText("Result:")).toBeInTheDocument();
      expect(screen.getByText("0.17")).toBeInTheDocument();
    });

    it("shows correct result when input 1 2 is filled and divide is clicked", () => {
      render(<Home />);

      fireEvent.change(screen.getByPlaceholderText("Input 1"), {
        target: { value: 1 },
      });
      fireEvent.change(screen.getByPlaceholderText("Input 2"), {
        target: { value: 2 },
      });
      fireEvent.click(screen.getByTestId("divide"));

      expect(screen.getByText("Result:")).toBeInTheDocument();
      expect(screen.getByText("0.50")).toBeInTheDocument();
    });

    it("shows correct result when input 1 3 is filled and divide is clicked", () => {
      render(<Home />);

      fireEvent.change(screen.getByPlaceholderText("Input 1"), {
        target: { value: 1 },
      });
      fireEvent.change(screen.getByPlaceholderText("Input 3"), {
        target: { value: 3 },
      });
      fireEvent.click(screen.getByTestId("divide"));

      expect(screen.getByText("Result:")).toBeInTheDocument();
      expect(screen.getByText("0.33")).toBeInTheDocument();
    });

    it("shows correct result when input 2 3 is filled and divide is clicked", () => {
      render(<Home />);

      fireEvent.change(screen.getByPlaceholderText("Input 2"), {
        target: { value: 2 },
      });
      fireEvent.change(screen.getByPlaceholderText("Input 3"), {
        target: { value: 3 },
      });
      fireEvent.click(screen.getByTestId("divide"));

      expect(screen.getByText("Result:")).toBeInTheDocument();
      expect(screen.getByText("0.67")).toBeInTheDocument();
    });
  });
});
