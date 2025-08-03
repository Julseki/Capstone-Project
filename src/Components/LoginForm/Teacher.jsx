import React from "react";
import { useNavigate } from "react-router-dom";
import { FaUserCircle, FaCog, FaSignOutAlt } from "react-icons/fa";
import "../../styles/Teacher.css";

const Teacher = () => {
  const navigate = useNavigate();

  const handleProfileClick = () => {
    navigate("/set-profile");
  };

  const handleSettingsClick = () => {
    navigate("/settings");
  };

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className="teacher-home-container">
      <header className="header">
        <div className="header-icons">
          <div className="header-box1" onClick={handleProfileClick}>
            <FaUserCircle className="icon" />
            <span>Profile</span>
          </div>
          <div className="header-box2" onClick={handleSettingsClick}>
            <FaCog className="icon" />
            <span>Settings</span>
          </div>
          <div className="header-box3" onClick={handleLogout}>
            <FaSignOutAlt className="icon" />
            <span>Logout</span>
          </div>
        </div>
      </header>

      <div className="containers">
        <h1 className="title">CREATE CLASS</h1>
        <div className="form-group">
          <label htmlFor="gradeLevel" className="label">
            GRADE LEVEL
          </label>
          <input type="text" id="gradeLevel" className="input" />
        </div>

        <div className="form-group">
          <label htmlFor="section" className="label">
            SECTION
          </label>
          <input type="text" id="section" className="input" />
        </div>

        <div className="form-group">
          <label htmlFor="subject" className="label">
            SUBJECT
          </label>
          <input type="text" id="subject" className="input" />
        </div>

        <div className="buttons">
          <button
            className="btn create-btn"
            onClick={() => navigate("/my-class-teacher")}
          >
            CREATE CLASS
          </button>

          <button
            className="btn cancel-btn"
            onClick={() => navigate("/account-type")}
          >
            CANCEL
          </button>
        </div>
      </div>
    </div>
  );
};

export default Teacher;
