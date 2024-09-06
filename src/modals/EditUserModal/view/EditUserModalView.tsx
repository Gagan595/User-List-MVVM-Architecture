import {
  CloseButton,
  Input,
  ModalActions,
  ModalContent,
  ModalOverlay,
  SaveButton,
} from "./Styled";

import React from "react";
import { useEditUserModalLogic } from "../logic/context";

interface EditUserModalProps {}

export const EditUserModalView: React.FC<EditUserModalProps> = () => {
  const { user, handleChange, handleSubmit, onClose } = useEditUserModalLogic();

  return (
    <ModalOverlay>
      <ModalContent>
        <h3>Edit User</h3>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <Input
            type="text"
            name="name"
            placeholder="Name"
            value={user?.name}
            onChange={handleChange}
            required
          />
          <Input
            type="text"
            name="username"
            placeholder="Username"
            value={user?.username}
            onChange={handleChange}
            required
          />
          <Input
            type="email"
            name="email"
            placeholder="Email"
            value={user?.email}
            onChange={handleChange}
            required
          />
          <Input
            type="text"
            name="phone"
            placeholder="Phone"
            value={user?.phone}
            onChange={handleChange}
            required
          />
          <Input
            type="text"
            name="website"
            placeholder="Website"
            value={user?.website}
            onChange={handleChange}
            required
          />
          <Input
            type="text"
            name="address.street"
            placeholder="Street"
            value={user?.address.street}
            onChange={handleChange}
            required
          />
          <Input
            type="text"
            name="address.city"
            placeholder="City"
            value={user?.address.city}
            onChange={handleChange}
            required
          />
          <Input
            type="text"
            name="address.zipcode"
            placeholder="Zipcode"
            value={user?.address.zipcode}
            onChange={handleChange}
            required
          />
          <Input
            type="text"
            name="company.name"
            placeholder="Company Name"
            value={user?.company.name}
            onChange={handleChange}
            required
          />
          <ModalActions>
            <CloseButton type="button" onClick={onClose}>
              Close
            </CloseButton>
            <SaveButton onClick={handleSubmit} type="submit">
              Save changes
            </SaveButton>
          </ModalActions>
        </form>
      </ModalContent>
    </ModalOverlay>
  );
};
