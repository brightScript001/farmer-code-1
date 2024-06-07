import React, { useState } from "react";
import { userData } from "./headerData";
import {
  HeaderContainer,
  BackButton,
  SearchBar,
  IconContainer,
  UserProfile,
} from "./headerStyledComponents";
import backIcon from "../../../../assets/icons/left-arrow-backup-2-svgrepo-com.svg";
import searchIcon from "../../../../assets/icons/search.svg";
import bellIcon from "../../../../assets/icons/bell.svg";

const DashboardHeader = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log("Search term:", searchTerm);
  };

  return (
    <HeaderContainer>
      <BackButton>
        <img src={backIcon} alt="Back" />
        Home
      </BackButton>
      <SearchBar as="form" onSubmit={handleSearchSubmit}>
        <img src={searchIcon} alt="Search" />
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </SearchBar>
      <IconContainer>
        <img src={bellIcon} alt="Notifications" />
        <UserProfile>
          <img src={userData.avatarUrl} alt="User Avatar" />
          <span>{userData.name}</span>
        </UserProfile>
      </IconContainer>
    </HeaderContainer>
  );
};

export default DashboardHeader;
