import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FaUserCircle,
  FaCog,
  FaSignOutAlt,
  FaArrowRight,
  FaTimes,
} from "react-icons/fa";
import "../../styles/TeacherMyClass.css";

const MyClass = () => {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate("/student-home");
  };

  const handleNext = () => {
    navigate("/view-class-teacher");
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
        <div className="header-icons">
          <div className="header-box1">
            <FaUserCircle className="icon" />
            <span>PROFILE</span>
          </div>
          <div
            className="header-box2"
            onClick={() => navigate("/settings")}
            style={{ cursor: "pointer" }}
          >
            <FaCog className="icon" />
            <span>SETTINGS</span>
          </div>
          <div
            className="header-box3"
            onClick={handleLogout}
            style={{ cursor: "pointer" }}
          >
            <FaSignOutAlt className="icon" />
            <span>LOGOUT</span>
          </div>
        </div>
      </header>

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
    </div>
  );
};

export default MyClass;
