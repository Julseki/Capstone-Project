import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FaUserCircle,
  FaCog,
  FaSignOutAlt,
  FaArrowRight,
  FaTimes,
} from "react-icons/fa";
import "../../styles/MyClass.css";

const MyClass = () => {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate("/student-home");
  };

  const handleNext = () => {
    navigate("/view-class");
  };
  const handleLogout = () => {
    navigate("/");
  };

  const handleProfileClick = () => {
    navigate("/set-profile");
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
            onClick={() => navigate("/settings")}
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

      <form className="my-class-form">
        <div className="student-home-container">
          <div className="container">
            <div className="class-box">
              <FaTimes className="close-icon" onClick={handleClose} />
              <div className="class-header">
                <h1>MY CLASS</h1>
              </div>
              <p>JOIN CLASS TO GET STARTED</p>
            </div>
            <div className="next-icon" onClick={handleNext}>
              <FaArrowRight />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default MyClass;
