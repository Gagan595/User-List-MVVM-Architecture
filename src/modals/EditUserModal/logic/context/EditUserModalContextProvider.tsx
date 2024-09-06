import React, { createContext, useContext } from "react";

import { EditUserModalContract } from "./EditUserModalContract";

const EditUserModalContext = createContext<EditUserModalContract | undefined>(
  undefined
);

export const EditUserModalContextProvider: React.FC<
  React.PropsWithChildren<EditUserModalContract>
> = ({ children, handleChange, handleSubmit, onClose, user }) => {
  return (
    <EditUserModalContext.Provider
      value={{
        handleChange,
        handleSubmit,
        onClose,
        user,
      }}
    >
      {children}
    </EditUserModalContext.Provider>
  );
};

export const useEditUserModalLogic = () => {
  const context = useContext(EditUserModalContext);
  if (!context) {
    throw new Error(
      "useEditUserModalLogic must be used within EditUserModalContextProvider"
    );
  }
  return context;
};
