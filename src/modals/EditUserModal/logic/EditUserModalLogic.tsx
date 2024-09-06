import React, { useState } from "react";
import { RootState, toggleEditUserModal, updateUser } from "../../../store";
import { useDispatch, useSelector } from "react-redux";

import { EditUserModalContextProvider } from "./context";
import { User } from "../../../types/users";
import { toast } from "react-toastify";

export const EditUserModalLogic: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const dispatch = useDispatch();
  const selectUserId = useSelector(
    (state: RootState) => state.user.selectUserId
  );

  const user = useSelector((state: RootState) =>
    selectUserId !== null
      ? state.user.users.filter((user: User) => user.id === selectUserId)[0]
      : null
  );

  const emptyUser: User = {
    id: 0,
    name: "",
    username: "",
    email: "",
    address: {
      street: "",
      suite: "",
      city: "",
      zipcode: "",
      geo: {
        lat: "",
        lng: "",
      },
    },
    phone: "",
    website: "",
    company: {
      name: "",
      catchPhrase: "",
      bs: "",
    },
  };

  const [updatedUser, setUpdatedUser] = useState<User>(user || emptyUser);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name.includes(".")) {
      const keys = name.split(".");
      const firstKey = keys[0] as keyof User;
      const secondKey = keys[1];

      setUpdatedUser((prevUser) => {
        const topLevelValue = prevUser[firstKey];

        if (typeof topLevelValue === "object" && topLevelValue !== null) {
          return {
            ...prevUser,
            [firstKey]: {
              ...topLevelValue,
              [secondKey]: value,
            },
          };
        }

        return prevUser;
      });
    } else {
      setUpdatedUser({ ...updatedUser, [name]: value });
    }
  };

  const handleSubmit = () => {
    onSave(updatedUser);
    onClose();
    toast.success("User Edit Successfully!", {
      position: "top-right",
      autoClose: 3000,
    });
  };

  const onClose = () => {
    dispatch(toggleEditUserModal());
  };

  const onSave = (updatedUser: User) => {
    dispatch(updateUser(updatedUser));
  };

  return (
    <EditUserModalContextProvider
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      onClose={onClose}
      user={updatedUser}
    >
      {children}
    </EditUserModalContextProvider>
  );
};
