import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FaUserCircle,
  FaCog,
  FaSignOutAlt,
  FaDoorOpen,
  FaChalkboardTeacher,
  FaShoppingCart,
} from "react-icons/fa";
import "../../styles/StudentHome.css";

const StudentHome = () => {
  const navigate = useNavigate();

  const handleProfileClick = () => {
    navigate("/set-profile");
  };

  const handleShopClick = () => {
    navigate("/shop");
  };
  const handleJoinClassClick = () => {
    navigate("/join-class");
  };
  const handleMyClassClick = () => {
    navigate("/my-class");
  };
  const handleLogout = () => {
    navigate("/");
  };
  const handleSettingsClick = () => {
    navigate("/settings");
  };

  return (
    <div className="student-home-container">
      <header className="student-home-header">
        <div className="header-left"></div>
        <div className="header-icons">
          <div
            className="header-box1"
            onClick={handleProfileClick}
            style={{ cursor: "pointer" }}
          >
            <FaUserCircle className="icon" />
            <span>Profile</span>
          </div>

          <div
            className="header-box2"
            onClick={handleSettingsClick}
            style={{ cursor: "pointer" }}
          >
            <FaCog className="icon" />
            <span>Settings</span>
          </div>

          <div
            className="header-box3"
            onClick={handleLogout}
            style={{ cursor: "pointer" }}
          >
            <FaSignOutAlt className="icon" />
            <span>Logout</span>
          </div>
        </div>
      </header>

      <main className="student-home-main">
        <div className="home-box1" onClick={handleJoinClassClick}>
          <FaDoorOpen className="home-icon1" />
          <span>Join Class</span>
        </div>
        <div className="home-box2" onClick={handleMyClassClick}>
          <FaChalkboardTeacher className="home-icon2" />
          <span>My Class</span>
        </div>
        <div className="home-box3" onClick={handleShopClick}>
          <FaShoppingCart className="home-icon3" />
          <span>Shop</span>
        </div>
      </main>
    </div>
  );
};
export default StudentHome;
