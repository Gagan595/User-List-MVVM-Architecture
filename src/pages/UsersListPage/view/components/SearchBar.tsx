import React from "react";
import styled from "styled-components";

interface SearchBarProps {
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  placeholder,
  value,
  onChange,
}) => {
  return (
    <SearchContainer>
      <SearchInput
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <SearchButton>GO</SearchButton>
    </SearchContainer>
  );
};

// Styled Components
const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

const SearchInput = styled.input`
  flex: 1;
  padding: 10px;
  border: 1px solid #ced4da;
  border-radius: 5px;
  margin-right: 10px;
`;

const SearchButton = styled.button`
  padding: 10px 20px;
  background-color: white;
  border: 1px dashed #343a40;
  border-radius: 5px;
  &:hover {
    background-color: #e9ecef;
  }
`;