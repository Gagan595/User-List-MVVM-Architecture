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
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.theme.hoverButtonBackGround};
    color: ${props => props.theme.hoverButtonText}

  }

  @media (max-width: 768px) {
    align-self: center;

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
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  border-radius: 5px;
  box-shadow: ${(props) => props.theme.boxShadow};
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: ${(props) => props.theme.hoverBackground};
    * {
    color: ${(props) => props.theme.hoverText};
  }
  button {
    background-color: ${(props) => props.theme.hoverButtonBackGround};
    color:#ffffff;
  }
  }

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

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const SearchInput = styled.input`
  flex: 1;
  padding: 10px;
  border: 1px solid #ced4da;
  border-radius: 5px;
  margin-right: 10px;
`;

export const SearchButton = styled.button`
  padding: 10px 20px;
  background-color: white;
  border: 1px dashed #343a40;
  border-radius: 5px;
  &:hover {
    background-color: #e9ecef;
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
    color: ${(props) => props.theme.hoverText};
    cursor: pointer;
   & >  ${UserInfo} {
      color: ${(props) => props.theme.hoverText};
    }
  }

  @media (max-width: 768px) {
  
    margin-top: 10px;
  }
`;

export const NoUsersFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  text-align: center;
  color: #b0bec5;
`;

export const NoUsersFoundMessage = styled.p`
  font-size: 18px;
  color: #b0bec5;
  margin-top: 10px;
`;
