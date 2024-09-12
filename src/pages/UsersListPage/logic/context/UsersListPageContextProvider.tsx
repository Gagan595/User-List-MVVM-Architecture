import React, { createContext, useContext } from "react";

import { UsersListPageContract } from "./UsersListPageContract";

const UsersListPageContext = createContext<UsersListPageContract | undefined>(
  undefined
);

export const UsersListPageContextProvider: React.FC<
  React.PropsWithChildren<UsersListPageContract>
> = ({
  children,
  filteredUsers,
  isAddUserModalOpen,
  isEditUserModalOpen,
  isUserDetailsModalOpen,
  onClickAddButton,
  onClickEditButton,
  searchTerm,
  setSearchTerm,
  onClickUserDetail,
  users,
  userDetails,
}) => {
  return (
    <UsersListPageContext.Provider
      value={{
        filteredUsers,
        isAddUserModalOpen,
        isEditUserModalOpen,
        isUserDetailsModalOpen,
        onClickAddButton,
        onClickEditButton,
        searchTerm,
        setSearchTerm,
        users,
        onClickUserDetail,
        userDetails,
      }}
    >
      {children}
    </UsersListPageContext.Provider>
  );
};

export const useUsersListPageLogic = () => {
  const context = useContext(UsersListPageContext);
  if (!context) {
    throw new Error(
      "useUsersListPageLogic must be used within UsersListPageContextProvider"
    );
  }
  return context;
};
