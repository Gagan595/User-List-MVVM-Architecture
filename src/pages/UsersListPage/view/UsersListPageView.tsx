import {
  AddUserButton,
  Container,
  Header,
  NoUsersFoundContainer,
  NoUsersFoundMessage,
  UserList,
} from "./Styled";
import { AddUserModal, EditUserModal } from "../../../modals";

import PersonOffIcon from "@mui/icons-material/PersonOff";
import React from "react";
import { SearchBar } from "./components/SearchBar";
import UserDetailsModal from "./components/UserDetailsModal";
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
    isUserDetailsModalOpen,
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
        {filteredUsers.length > 0 ? (
          <UserList>
            {filteredUsers.map((user) => (
              <UserItem key={user.id} user={user} />
            ))}
          </UserList>
        ) : (
          <NoUsersFoundContainer>
            <PersonOffIcon style={{ fontSize: 60, color: "#b0bec5" }} />
            <NoUsersFoundMessage>No users found</NoUsersFoundMessage>
          </NoUsersFoundContainer>
        )}
      </UserList>
      {isUserDetailsModalOpen && <UserDetailsModal />}
      {isAddUserModalOpen && <AddUserModal />}
      {isEditUserModalOpen && <EditUserModal />}
    </Container>
  );
};
