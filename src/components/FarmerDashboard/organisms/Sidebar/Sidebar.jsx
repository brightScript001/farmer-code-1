import React from "react";
import {
  SidebarContainer,
  LogoContainer,
  MenuItem,
  ProfileContainer,
  SignoutButton,
} from "./sidebarStyledComponents";
import logo from "../../../../assets/Onefarm-Tech-Logo 2.png";
import homeIcon from "../../../../assets/icons/home.svg";
import marketplaceIcon from "../../../../assets/icons/marketplace.svg";
import inventoryIcon from "../../../../assets/icons/marketplace.svg";
import paymentIcon from "../../../../assets/icons/payment.svg";
import supportIcon from "../../../../assets/icons/support.svg";
import profileIcon from "../../../../assets/icons/profile.svg";
import signoutIcon from "../../../../assets/icons/signout.svg";

const Sidebar = () => {
  return (
    <SidebarContainer>
      <LogoContainer>
        <img src={logo} alt="Logo" />
      </LogoContainer>
      <MenuItem active>
        <img src={homeIcon} alt="Home" />
        <span>Home</span>
      </MenuItem>
      <MenuItem>
        <img src={marketplaceIcon} alt="Marketplace" />
        <span>Marketplace</span>
      </MenuItem>
      <MenuItem>
        <img src={inventoryIcon} alt="Inventory" />
        <span>Inventory</span>
      </MenuItem>
      <MenuItem>
        <img src={paymentIcon} alt="Payment" />
        <span>Payment</span>
      </MenuItem>
      <MenuItem>
        <img src={supportIcon} alt="Support" />
        <span>Support</span>
      </MenuItem>
      <ProfileContainer>
        <img src={profileIcon} alt="Profile" />
        <span>Profile</span>
      </ProfileContainer>
      <SignoutButton>
        <img src={signoutIcon} alt="Signout" />
        <span>Signout</span>
      </SignoutButton>
    </SidebarContainer>
  );
};

export default Sidebar;
