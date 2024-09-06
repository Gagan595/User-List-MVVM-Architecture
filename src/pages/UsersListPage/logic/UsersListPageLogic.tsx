import React, { useEffect, useState } from "react";
// Assuming correct path
import {
  RootState,
  selectUserById,
  setUsers,
  toggleAddUserModal,
  toggleEditUserModal,
} from "../../../store";
import { useDispatch, useSelector } from "react-redux";

import { User } from "../../../types/users";
import { UsersListPageContextProvider } from "./context";

// Assuming RootState is defined in your store

export const UsersListPageLogic: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const dispatch = useDispatch();
  const users = useSelector((state: RootState) => state.user.users);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const { isAddUserModalOpen, isEditUserModalOpen } = useSelector(
    (state: RootState) => state.global
  );

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => dispatch(setUsers(data)));
  }, [dispatch]);

  const filteredUsers = users.filter((user: User) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const onClickAddButton = () => {
    dispatch(toggleAddUserModal());
  };

  const onClickEditButton = (userId: number) => {
    dispatch(selectUserById(userId));
    dispatch(toggleEditUserModal());
  };

  return (
    <UsersListPageContextProvider
      users={users}
      filteredUsers={filteredUsers}
      searchTerm={searchTerm}
      setSearchTerm={setSearchTerm}
      onClickAddButton={onClickAddButton}
      onClickEditButton={onClickEditButton}
      isAddUserModalOpen={isAddUserModalOpen}
      isEditUserModalOpen={isEditUserModalOpen}
    >
      {children}
    </UsersListPageContextProvider>
  );
};
