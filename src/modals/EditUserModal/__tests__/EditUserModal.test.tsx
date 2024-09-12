import "@testing-library/jest-dom";

import { fireEvent, render, screen } from "@testing-library/react";

import { EditUserModalView } from "../view";
import React from "react";
import { useEditUserModalLogic } from "../logic/context";

jest.mock("../logic/context", () => ({
  useEditUserModalLogic: jest.fn(),
}));

describe("EditUserModalView", () => {
  it("renders correctly and handles interactions", () => {
    const mockHandleChange = jest.fn();
    const mockHandleSubmit = jest.fn();
    const mockOnClose = jest.fn();
    const mockUser = {
      name: "John Doe",
      username: "johndoe",
      email: "john@example.com",
      phone: "123-456-7890",
      website: "johnswebsite.com",
      address: {
        street: "123 Main St",
        city: "Anytown",
        zipcode: "12345",
      },
      company: {
        name: "John's Company",
      },
    };

    (useEditUserModalLogic as jest.Mock).mockReturnValue({
      user: mockUser,
      handleChange: mockHandleChange,
      handleSubmit: mockHandleSubmit,
      onClose: mockOnClose,
    });

    render(<EditUserModalView />);

    expect(screen.getByText("Edit User")).toBeInTheDocument();

    expect(screen.getByPlaceholderText("Name")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Username")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Email")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Phone")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Website")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Street")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("City")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Zipcode")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Company Name")).toBeInTheDocument();

    fireEvent.change(screen.getByPlaceholderText("Name"), {
      target: { value: "Jane Doe" },
    });
    expect(mockHandleChange).toHaveBeenCalled();

    fireEvent.click(screen.getByText("Save changes"));
    expect(mockHandleSubmit).toHaveBeenCalled();

    fireEvent.click(screen.getByText("Close"));
    expect(mockOnClose).toHaveBeenCalled();
  });
});
