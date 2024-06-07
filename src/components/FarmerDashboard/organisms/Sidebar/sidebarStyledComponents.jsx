import styled from "styled-components";

export const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 13.0625rem;
  height: 100vh;
  background-color: white;
  border-right: 0.0625rem solid #ccc;
  padding: 1rem 0.7rem;
`;

export const LogoContainer = styled.div`
  margin-bottom: 2rem;
  img {
    display: block;
    height: auto;
  }
`;

export const MenuItem = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0.75rem 0.7rem;
  cursor: pointer;
  color: ${(props) => (props.active ? "green" : "black")};
  background-color: ${(props) => (props.active ? "#e6f4ea" : "transparent")};

  &:hover {
    background-color: #e6f4ea;
  }

  img {
    margin-right: 1rem;
  }

  span {
    font-size: 1rem;
  }
`;

export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-top: auto;
  padding: 0.75rem 1.5rem;
  cursor: pointer;

  img {
    margin-right: 1rem;
  }

  span {
    font-size: 1rem;
    font-weight: bold;
  }
`;

export const SignoutButton = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0.75rem 1.5rem;
  cursor: pointer;
  color: red;

  img {
    margin-right: 1rem;
  }

  span {
    font-size: 1rem;
  }
`;
