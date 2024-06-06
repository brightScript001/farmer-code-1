import React from "react";
import { FaBell } from "react-icons/fa";
import Avatar from "../../atoms/Avatar/Avatar";
import SearchBar from "../../molecules/SearchBar/searchbar.component";
import Button, {
  BUTTON_TYPE_CLASSES,
} from "../../atoms/Button/button.component";
import AvatarImage from "../../../../assets/Avatar.png";
import "./DashboardHeader.css";
import { Link } from "react-router-dom";
import Text from "../../atoms/Text/text.component";
import Badge from "../../atoms/Badge/Badge";

const DashboardHeader = () => (
  <div className="dashboard-header">
    <div className="back-home">
      <Button buttonType={BUTTON_TYPE_CLASSES.back} />
      <Link to="/home">
        <Text variant="small2">Home</Text>
      </Link>
    </div>

    <SearchBar />

    <div className="right-section">
      <Badge count={7} color="red">
        <FaBell className="notification-icon" />
      </Badge>

      <div className="profile">
        <Avatar src={AvatarImage} alt="User Profile" />
        <Text variant="medium" className="profile-name">
          Idoma Prince
        </Text>
      </div>
    </div>
  </div>
);

export default DashboardHeader;
