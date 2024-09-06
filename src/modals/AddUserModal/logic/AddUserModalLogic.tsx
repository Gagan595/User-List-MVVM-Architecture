import React, { useState } from "react";
import { addUser, toggleAddUserModal } from "../../../store";

import { AddUserModalContextProvider } from "./context";
import { User } from "../../../types/users";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";

export const AddUserModalLogic: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const dispatch = useDispatch();

  const [newUser, setNewUser] = useState<User>({
    id: Date.now(),
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
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name.includes(".")) {
      const keys = name.split(".");
      const firstKey = keys[0] as keyof User;
      const secondKey = keys[1];

      setNewUser((prevUser) => {
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
      setNewUser({ ...newUser, [name]: value });
    }
  };

  // Dummy API function to add a new user
  const addUserApi = async (newUser: User): Promise<User> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(newUser);
      }, 1000);
    });
  };

  const handleSubmit = async () => {
    const addedUser = await addUserApi(newUser);
    dispatch(addUser(addedUser));
    onClose();

    setTimeout(() => {
      toast.success("User Added Successfully!", {
        position: "top-right",
        autoClose: 3000,
      });
    }, 1200);
  };

  const onClose = () => {
    dispatch(toggleAddUserModal());
  };

  return (
    <AddUserModalContextProvider
      onClose={onClose}
      newUser={newUser}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    >
      {children}
    </AddUserModalContextProvider>
  );
};
