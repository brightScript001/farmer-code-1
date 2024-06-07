import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 7.3125rem;
  padding: 0 1rem;
  border-bottom: 0.0625rem solid #ccc;
`;

export const BackButton = styled.button`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  border: none;
  background-color: white;
  cursor: pointer;

  svg {
    margin-right: 0.5rem;
  }
`;

export const SearchBar = styled.div`
  display: flex;
  align-items: center;
  width: 25.0625rem;
  height: 2.625rem;
  padding: 0.5rem 1rem;
  border: 0.0625rem solid #ccc;
  border-radius: 2rem;
  background-color: #f5f5f5;

  svg {
    margin-right: 0.5rem;
  }

  input {
    flex: 1;
    border: none;
    background: transparent;
    font-size: 1rem;
    outline: none;
    margin-left: 0.5rem;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;

  svg {
    margin-left: 1rem;
    cursor: pointer;
  }
`;

export const UserProfile = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    margin-left: 2rem;
  }

  span {
    margin-left: 0.7rem;
    font-weight: bold;
  }
`;
