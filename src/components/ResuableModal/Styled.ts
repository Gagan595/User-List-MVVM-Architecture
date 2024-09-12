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
  padding: 20px;
  
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
  box-sizing: border-box;
  max-height: 90vh;
  overflow-y: auto; 

  @media (max-height: 600px) {
    max-height: 80vh;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  border: 1px solid #ced4da;
  border-radius: 5px;
  box-sizing: border-box;
`;

export const ModalActions = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
 
   @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;

    button {
      width: 120px;
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
    color: ${(props) => props.theme.hoverText};
  }

  @media (max-width: 768px) {
    padding: 8px 15px;
  }

  @media (max-width: 480px) {
    padding: 6px 12px;
  }
`;