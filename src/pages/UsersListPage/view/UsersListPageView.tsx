import { AddUserButton, Container, Header, UserList } from "./Styled";
import { AddUserModal, EditUserModal } from "../../../modals";

import React from "react";
import { SearchBar } from "./components/SearchBar";
import { UserItem } from "./components/UserItem";
import { useUsersListPageLogic } from "../logic/context";

export const UsersListPageView: React.FC = () => {
  const {
    filteredUsers,
    searchTerm,
    setSearchTerm,
    onClickAddButton,
    isAddUserModalOpen,
    isEditUserModalOpen,
  } = useUsersListPageLogic();

  return (
    <Container>
      <Header>
        <AddUserButton onClick={onClickAddButton}>Add User</AddUserButton>
        <SearchBar
          placeholder="Search here"
          value={searchTerm}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setSearchTerm(e.target.value)
          }
        />
      </Header>
      <UserList>
        {filteredUsers.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </UserList>
      {isAddUserModalOpen && <AddUserModal />}
      {isEditUserModalOpen && <EditUserModal />}
    </Container>
  );
};
