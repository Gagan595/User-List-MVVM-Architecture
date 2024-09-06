import { EditUserButton, UserContainer, UserInfo } from "../Styled";

import React from "react";
import { User } from "../../../../types/users";
import { useUsersListPageLogic } from "../../logic/context";

interface UserItemProps {
  user: User;
}

export const UserItem: React.FC<UserItemProps> = ({ user }) => {
  const { onClickEditButton } = useUsersListPageLogic();

  return (
    <>
      <UserContainer>
        <UserInfo>
          <strong>{user.name}</strong>
          <p>{user.phone}</p>
          <p>{user.email}</p>
        </UserInfo>
        <EditUserButton onClick={() => onClickEditButton(user.id)}>
          Edit User
        </EditUserButton>
      </UserContainer>
    </>
  );
};
