import React, { createContext, useContext } from "react";

import { AddUserModalContract } from "./AddUserModalContract";

const AddUserModalContext = createContext<AddUserModalContract | undefined>(
  undefined
);

export const AddUserModalContextProvider: React.FC<
  React.PropsWithChildren<AddUserModalContract>
> = ({ children, newUser, handleChange, handleSubmit, onClose }) => {
  return (
    <AddUserModalContext.Provider
      value={{ newUser, handleChange, handleSubmit, onClose }}
    >
      {children}
    </AddUserModalContext.Provider>
  );
};

export const useAddUserModalLogic = () => {
  const context = useContext(AddUserModalContext);
  if (!context) {
    throw new Error(
      "useAddUserModalLogic must be used within AddUserModalContextProvider"
    );
  }
  return context;
};
