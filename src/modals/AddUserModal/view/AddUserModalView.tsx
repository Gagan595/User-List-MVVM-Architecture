import {
  CloseButton,
  Input,
  ModalActions,
  ModalContent,
  ModalOverlay,
  SaveButton,
} from "./Styled";

import React from "react";
import { useAddUserModalLogic } from "../logic/context";

export const AddUserModalView: React.FC = () => {
  const { newUser, handleChange, handleSubmit, onClose } =
    useAddUserModalLogic();

  return (
    <ModalOverlay>
      <ModalContent>
        <h3>Add User</h3>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <Input
            type="text"
            name="name"
            placeholder="Name"
            value={newUser.name}
            onChange={handleChange}
            required
          />
          <Input
            type="text"
            name="username"
            placeholder="Username"
            value={newUser.username}
            onChange={handleChange}
            required
          />
          <Input
            type="email"
            name="email"
            placeholder="Email"
            value={newUser.email}
            onChange={handleChange}
            required
          />
          <Input
            type="text"
            name="phone"
            placeholder="Phone"
            value={newUser.phone}
            onChange={handleChange}
            required
          />
          <Input
            type="text"
            name="website"
            placeholder="Website"
            value={newUser.website}
            onChange={handleChange}
            required
          />
          <Input
            type="text"
            name="address.street"
            placeholder="Street"
            value={newUser.address.street}
            onChange={handleChange}
            required
          />
          <Input
            type="text"
            name="address.city"
            placeholder="City"
            value={newUser.address.city}
            onChange={handleChange}
            required
          />
          <Input
            type="text"
            name="address.zipcode"
            placeholder="Zipcode"
            value={newUser.address.zipcode}
            onChange={handleChange}
            required
          />
          <Input
            type="text"
            name="company.name"
            placeholder="Company Name"
            value={newUser.company.name}
            onChange={handleChange}
            required
          />
          <ModalActions>
            <CloseButton type="button" onClick={onClose}>
              Close
            </CloseButton>
            <SaveButton type="submit">Save changes</SaveButton>
          </ModalActions>
        </form>
      </ModalContent>
    </ModalOverlay>
  );
};
