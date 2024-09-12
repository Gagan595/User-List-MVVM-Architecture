import "@testing-library/jest-dom";

import { fireEvent, render, screen } from "@testing-library/react";

import { AddUserModalView } from "../view";
import React from "react";
import { useAddUserModalLogic } from "../logic/context";

jest.mock("../logic/context", () => ({
  useAddUserModalLogic: jest.fn(),
}));

describe("AddUserModalView", () => {
  it("renders correctly and handles interactions", () => {
    const mockHandleChange = jest.fn();
    const mockHandleSubmit = jest.fn();
    const mockOnClose = jest.fn();
    const mockNewUser = {
      name: "",
      username: "",
      email: "",
      phone: "",
      website: "",
      address: {
        street: "",
        city: "",
        zipcode: "",
      },
      company: {
        name: "",
      },
    };

    (useAddUserModalLogic as jest.Mock).mockReturnValue({
      newUser: mockNewUser,
      handleChange: mockHandleChange,
      handleSubmit: mockHandleSubmit,
      onClose: mockOnClose,
    });

    render(<AddUserModalView />);

    expect(screen.getByText("Add User")).toBeInTheDocument();

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
      target: { value: "John Doe" },
    });
    expect(mockHandleChange).toHaveBeenCalled();

    fireEvent.click(screen.getByText("Save changes"));
    expect(mockHandleSubmit).toHaveBeenCalled();

    fireEvent.click(screen.getByText("Close"));
    expect(mockOnClose).toHaveBeenCalled();
  });
});
