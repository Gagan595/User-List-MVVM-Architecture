import { EditUserButton, UserContainer, UserInfo } from "../Styled";

import React from "react";
import { User } from "../../../../types/users";
import { useUsersListPageLogic } from "../../logic/context";

interface UserItemProps {
  user: User;
}

export const UserItem: React.FC<UserItemProps> = ({ user }) => {
  const { onClickEditButton, onClickUserDetail } = useUsersListPageLogic();

  return (
    <UserContainer onClick={() => onClickUserDetail(user.id)}>
      <UserInfo>
        <strong>{user.name}</strong>
        <p>{user.phone}</p>
        <p>{user.email}</p>
      </UserInfo>
      <EditUserButton
        onClick={(e) => {
          e.stopPropagation();
          onClickEditButton(user.id);
        }}
      >
        Edit User
      </EditUserButton>
    </UserContainer>
  );
};
