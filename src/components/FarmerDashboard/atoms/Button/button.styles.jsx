import styled from "styled-components";

export const BaseButton = styled.button`
  min-width: 10.3125rem;
  width: auto;
  height: 3.125rem;
  letter-spacing: 0.03125rem;
  line-height: 3.125rem;
  padding: 0 2.1875rem;
  font-size: 0.9375rem;
  background-color: black;
  color: white;
  text-transform: uppercase;
  font-family: "Open Sans Condensed";
  font-weight: bolder;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: white;
    color: black;
    border: 0.0625rem solid black;
  }
`;

export const BackButton = styled(BaseButton)`
  min-width: 2.3125rem;
  background-color: #f5f5f5;
  color: #333;
  border: 1px solid #ccc;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #e0e0e0;
  }

  &::before {
    content: "\\2190";
    margin-right: 0.5rem;
    font-size: 1.25rem;
    color: #333;
  }
`;

export const ActionButton = styled(BaseButton)`
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 0.25rem;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #3e8e41;
  }
`;
