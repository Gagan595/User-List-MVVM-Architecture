// Modal styles (ModalOverlay, ModalContent, Input, etc.)
import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalContent = styled.div`
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  padding: 20px;
  border-radius: 5px;
  width: 90%;
  max-width: 400px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  border: 1px solid #ced4da;
  border-radius: 5px;
`;

export const ModalActions = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

export const CloseButton = styled.button`
  background-color: #6c757d;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  &:hover {
    background-color: #5a6268;
  }
`;

export const SaveButton = styled.button`
  background-color: ${(props) => props.theme.buttonBackground};
  color: ${(props) => props.theme.buttonText};
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  &:hover {
    background-color: ${(props) => props.theme.buttonBackgroundHover || props.theme.buttonBackground};
  }
`;
