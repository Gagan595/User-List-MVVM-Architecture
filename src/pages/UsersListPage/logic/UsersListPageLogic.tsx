import React, { useEffect, useState } from "react";
// Assuming correct path
import {
  RootState,
  selectUserById,
  setUsers,
  toggleAddUserModal,
  toggleEditUserModal,
  toggleUserDetailsModal,
} from "../../../store";
import { useDispatch, useSelector } from "react-redux";

import { User } from "../../../types/users";
import { UsersListPageContextProvider } from "./context";

// Assuming RootState is defined in your store

export const UsersListPageLogic: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const dispatch = useDispatch();
  const { users, selectUserId } = useSelector((state: RootState) => state.user);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const { isAddUserModalOpen, isEditUserModalOpen, isUserDetailsModalOpen } =
    useSelector((state: RootState) => state.global);

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

  const onClickUserDetail = (userId: number) => {
    dispatch(selectUserById(userId));
    dispatch(toggleUserDetailsModal());
  };

  const userDetail =
    users.filter((user) => user.id === selectUserId)[0] ?? null;

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
      onClickUserDetail={onClickUserDetail}
      userDetails={userDetail}
      isUserDetailsModalOpen={isUserDetailsModalOpen}
    >
      {children}
    </UsersListPageContextProvider>
  );
};
