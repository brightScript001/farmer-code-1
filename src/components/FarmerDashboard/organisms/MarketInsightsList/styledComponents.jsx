// styledComponents.js
import styled from "styled-components";

export const Container = styled.div`
  width: 18.6875rem;
  height: 37.625rem;
  border: 0.0625rem solid #ccc;
  border-radius: 0.5rem;
  overflow: hidden;
`;

export const Header = styled.div`
  background-color: #f5f5f5;
  padding: 0.625rem;
  font-weight: bold;
  border-bottom: 0.0625rem solid #ccc;
`;

export const Item = styled.div`
  padding: 0.625rem;
  display: flex;
  justify-content: space-between;
  border-bottom: 0.0625rem solid #eee;

  &:last-child {
    border-bottom: none;
  }

  &.high {
    color: green;
  }

  &.low {
    color: red;
  }
`;

export const Change = styled.span`
  font-weight: bold;
`;
