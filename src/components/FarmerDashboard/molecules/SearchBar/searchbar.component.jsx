import React from "react";
import styled from "styled-components";

const SearchInput = styled.input`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  border-radius: 2rem;
  border: 1px solid #ccc;
  width: 25.0625rem;
`;

const SearchBar = () => {
  return <SearchInput type="text" placeholder="Search" />;
};

export default SearchBar;
