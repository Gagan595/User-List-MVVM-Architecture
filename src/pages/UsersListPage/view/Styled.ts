import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};

  @media (max-width: 768px) {
    padding: 15px;
  }

  @media (max-width: 480px) {
    padding: 10px;
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 20px;
  gap: 10px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

export const AddUserButton = styled.button`
  padding: 10px 20px;
  background-color: ${(props) => props.theme.buttonBackground};
  color: ${(props) => props.theme.buttonText};
  border: none;
  border-radius: 5px;
  align-self: flex-end;

  &:hover {
    background-color: ${(props) => props.theme.buttonBackgroundHover || props.theme.buttonBackground};
    cursor: pointer;
  }

  @media (max-width: 768px) {
    align-self: center;
    width: 100%;
  }
`;

export const UserList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
`;

export const UserContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  border-radius: 5px;
  box-shadow: ${(props) => props.theme.boxShadow};

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  color: ${(props) => props.theme.text};

  @media (max-width: 768px) {
    align-items: flex-start;
  }
`;

export const EditUserButton = styled.button`
  padding: 5px 10px;
  background-color: ${(props) => props.theme.buttonBackground};
  color: ${(props) => props.theme.buttonText};
  border: none;
  border-radius: 5px;

  &:hover {
    background-color: ${(props) => props.theme.buttonBackgroundHover || props.theme.buttonBackground};
    cursor: pointer;
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 10px;
  }
`;
