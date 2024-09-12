import {
  CloseButton,
  Input,
  ModalActions,
  ModalContent,
  ModalOverlay,
  SaveButton,
} from "./Styled";

import React from "react";

interface ReusableModalProps {
  title: string;
  inputs: {
    name: string;
    placeholder: string;
    type: string;
    value: string;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
  }[];
  onClose: () => void;
  onSubmit: () => void;
}

export const ReusableModal: React.FC<ReusableModalProps> = ({
  title,
  inputs,
  onClose,
  onSubmit,
}) => {
  return (
    <ModalOverlay>
      <ModalContent>
        <h3>{title}</h3>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onSubmit();
          }}
        >
          {inputs.map((input, index) => (
            <Input
              key={index}
              type={input.type}
              name={input.name}
              placeholder={input.placeholder}
              value={input.value}
              onChange={input.onChange}
              required
            />
          ))}
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
