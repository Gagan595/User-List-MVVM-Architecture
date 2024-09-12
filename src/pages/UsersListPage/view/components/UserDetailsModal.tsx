import {
  CloseButton,
  ModalActions,
  ModalOverlay,
} from "../../../../modals/AddUserModal/view/Styled";

import { ModalContent } from "../../../../modals/EditUserModal/view/Styled";
import React from "react";
import { toggleUserDetailsModal } from "../../../../store";
import { useDispatch } from "react-redux";
import { useUsersListPageLogic } from "../../logic/context";

const UserDetailsModal: React.FC = () => {
  const dispatch = useDispatch();
  const userListPageBusinessLogic = useUsersListPageLogic();
  const user = userListPageBusinessLogic?.userDetails ?? null;

  const onClickClose = () => {
    dispatch(toggleUserDetailsModal());
  };

  if (!user) return null;

  return (
    <ModalOverlay>
      <ModalContent>
        <h3>User Details</h3>
        <div>
          <p>
            <strong>Name:</strong> {user?.name}
          </p>
          <p>
            <strong>Username:</strong> {user?.username}
          </p>
          <p>
            <strong>Email:</strong> {user?.email}
          </p>
          <p>
            <strong>Phone:</strong> {user?.phone}
          </p>
          <p>
            <strong>Website:</strong> {user?.website}
          </p>
          <p>
            <strong>Street:</strong> {user?.address?.street}
          </p>
          <p>
            <strong>City:</strong> {user?.address?.city}
          </p>
          <p>
            <strong>Zipcode:</strong> {user?.address?.zipcode}
          </p>
          <p>
            <strong>Company Name:</strong> {user?.company?.name}
          </p>
        </div>
        <ModalActions>
          <CloseButton type="button" onClick={onClickClose}>
            Close
          </CloseButton>
        </ModalActions>
      </ModalContent>
    </ModalOverlay>
  );
};

export default UserDetailsModal;
