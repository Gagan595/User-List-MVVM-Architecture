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
  onClickAddButton,
  onClickEditButton,
  searchTerm,
  setSearchTerm,
  users,
}) => {
  return (
    <UsersListPageContext.Provider
      value={{
        filteredUsers,
        isAddUserModalOpen,
        isEditUserModalOpen,
        onClickAddButton,
        onClickEditButton,
        searchTerm,
        setSearchTerm,
        users,
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
