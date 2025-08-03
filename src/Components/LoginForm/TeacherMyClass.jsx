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

const TeacherMyClass = () => {
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
    <div className="student-home-containerer">
      <header className="student-home-header">
        <div className="header-left"></div>
        <div className="header-icons">
          <div
            className="header-box4"
            onClick={handleProfileClick}
            style={{ cursor: "pointer" }}
          >
            <FaUserCircle className="icon" />
            <span>Profile</span>
          </div>

          <div
            className="header-box5"
            onClick={() => navigate("/settings")}
            style={{ cursor: "pointer" }}
          >
            <FaCog className="icon" />
            <span>Settings</span>
          </div>

          <div
            className="header-box6"
            onClick={handleLogout}
            style={{ cursor: "pointer" }}
          >
            <FaSignOutAlt className="icon" />
            <span>Logout</span>
          </div>
        </div>
      </header>

      <form className="my-class-form1">
        <div className="student-home-containerer">
          <div className="containerer">
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

export default TeacherMyClass;
