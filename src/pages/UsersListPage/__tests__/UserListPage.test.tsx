import "@testing-library/jest-dom";

import { fireEvent, render, screen } from "@testing-library/react";

import { UsersListPageView } from "../view";
import { useUsersListPageLogic } from "../logic/context";

jest.mock("../../../modals", () => ({
  AddUserModal: () => <div>Add User Modal</div>,
  EditUserModal: () => <div>Edit User Modal</div>,
}));

jest.mock("../view/components", () => () => <div>User Details Modal</div>);

jest.mock("../view/components", () => ({ user }: { user: any }) => (
  <div>{user.name}</div>
));

jest.mock("../logic/context", () => ({
  useUsersListPageLogic: jest.fn(),
}));

describe("UsersListPageView", () => {
  it("renders correctly and handles interactions", () => {
    const mockFilteredUsers = [
      { id: 1, name: "John Doe" },
      { id: 2, name: "Jane Smith" },
    ];
    const mockSearchTerm = "John";
    const mockSetSearchTerm = jest.fn();
    const mockOnClickAddButton = jest.fn();
    const mockIsAddUserModalOpen = false;
    const mockIsEditUserModalOpen = false;
    const mockIsUserDetailsModalOpen = false;

    (useUsersListPageLogic as jest.Mock).mockReturnValue({
      filteredUsers: mockFilteredUsers,
      searchTerm: mockSearchTerm,
      setSearchTerm: mockSetSearchTerm,
      onClickAddButton: mockOnClickAddButton,
      isAddUserModalOpen: mockIsAddUserModalOpen,
      isEditUserModalOpen: mockIsEditUserModalOpen,
      isUserDetailsModalOpen: mockIsUserDetailsModalOpen,
    });

    render(<UsersListPageView />);

    expect(screen.getByText("Add User")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Search here")).toBeInTheDocument();

    expect(screen.getByText("John Doe")).toBeInTheDocument();
    expect(screen.getByText("Jane Smith")).toBeInTheDocument();

    fireEvent.change(screen.getByPlaceholderText("Search here"), {
      target: { value: "John" },
    });

    fireEvent.click(screen.getByText("Add User"));
    expect(mockOnClickAddButton).toHaveBeenCalled();

    (useUsersListPageLogic as jest.Mock).mockReturnValue({
      filteredUsers: [],
      searchTerm: mockSearchTerm,
      setSearchTerm: mockSetSearchTerm,
      onClickAddButton: mockOnClickAddButton,
      isAddUserModalOpen: mockIsAddUserModalOpen,
      isEditUserModalOpen: mockIsEditUserModalOpen,
      isUserDetailsModalOpen: mockIsUserDetailsModalOpen,
    });
    render(<UsersListPageView />);
    expect(screen.getByText("No users found")).toBeInTheDocument();

    expect(screen.queryByText("Add User Modal")).not.toBeInTheDocument();
    expect(screen.queryByText("Edit User Modal")).not.toBeInTheDocument();
    expect(screen.queryByText("User Details Modal")).not.toBeInTheDocument();
  });
});
