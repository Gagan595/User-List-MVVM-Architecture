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
  padding: 20px; /* Add padding for small screens */

  /* Ensure overlay takes full screen on smaller devices */
  @media (max-width: 768px) {
    padding: 10px;
  }
`;

export const ModalContent = styled.div`
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  padding: 20px;
  border-radius: 5px;
  width: 90%;
  max-width: 400px;
  box-sizing: border-box; /* Add box-sizing */
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  border: 1px solid #ced4da;
  border-radius: 5px;
  box-sizing: border-box; /* Add box-sizing to avoid overflowing */
`;


export const ModalActions = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;

  /* Stack buttons vertically on small screens */
  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;

    button {
      width: 100%;
      margin-bottom: 10px;
    }
  }
`;

export const CloseButton = styled.button`
  background-color: #6c757d;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  &:hover {
    background-color: #5a6268;
  }

  /* Adjust button sizing for smaller screens */
  @media (max-width: 768px) {
    padding: 8px 15px;
  }

  @media (max-width: 480px) {
    padding: 6px 12px;
  }
`;

export const SaveButton = styled.button`
  background-color: ${(props) => props.theme.buttonBackground};
  color: ${(props) => props.theme.buttonText};
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.theme.buttonBackgroundHover || props.theme.buttonBackground};
  }

  /* Adjust button sizing for smaller screens */
  @media (max-width: 768px) {
    padding: 8px 15px;
  }

  @media (max-width: 480px) {
    padding: 6px 12px;
  }
`;
