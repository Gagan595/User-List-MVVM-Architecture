import "@testing-library/jest-dom";

import { fireEvent, render, screen } from "@testing-library/react";

import { ReusableModal } from "../ReusableModal";

describe("ReusableModal", () => {
  it("renders correctly and handles close and submit actions", () => {
    const onClose = jest.fn();
    const onSubmit = jest.fn();

    const inputs = [
      {
        name: "testInput",
        placeholder: "Test Input",
        type: "text",
        value: "test",
        onChange: jest.fn(),
      },
    ];

    render(
      <ReusableModal
        title="Test Modal"
        inputs={inputs}
        onClose={onClose}
        onSubmit={onSubmit}
      />
    );

    expect(screen.getByText("Test Modal")).toBeInTheDocument();

    expect(screen.getByPlaceholderText("Test Input")).toBeInTheDocument();

    expect(screen.getByPlaceholderText("Test Input")).toHaveValue("test");

    fireEvent.click(screen.getByText("Close"));
    expect(onClose).toHaveBeenCalledTimes(1);

    fireEvent.change(screen.getByPlaceholderText("Test Input"), {
      target: { value: "new value" },
    });

    fireEvent.click(screen.getByText("Save changes"));
    expect(onSubmit).toHaveBeenCalledTimes(1);
  });
});
