import React from "react";
import { FaUserCircle, FaCog, FaSignOutAlt } from "react-icons/fa";
import "../../styles/ViewClass.css";
import { useNavigate } from "react-router-dom";

const ViewClass = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  const handleEnterRoom = () => {
    navigate("/student-class");
  };

  const handleProfileClick = () => {
    navigate("/set-profile");
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
      <div className="view-class-container">
        <h1>MY CLASS</h1>
        <div className="class-list">
          <div className="class-card1">
            <div className="class-info">
              <div className="class-details">
                <p>
                  <strong>GRADE LEVEL:</strong> 3
                </p>
                <p>
                  <strong>SECTION:</strong> SAMPAGUITA
                </p>
                <p>
                  <strong>SUBJECT:</strong> MATH
                </p>
                <p>
                  <strong>TEACHER:</strong> John Doe
                </p>
              </div>
            </div>
            <div className="class-actions">
              <div className="class-code-section">
                <h3>CLASS CODE</h3>
                <p className="class-code">ABC123</p>
              </div>
              <button
                className="enter-room-btn"
                onClick={() => handleEnterRoom()}
              >
                ENTER ROOM
              </button>
            </div>
          </div>

          <div className="class-card2">
            <div className="class-info">
              <div className="class-details">
                <p>
                  <strong>GRADE LEVEL:</strong> 3
                </p>
                <p>
                  <strong>SECTION:</strong> ROSE
                </p>
                <p>
                  <strong>SUBJECT:</strong> FILIPINO
                </p>
                <p>
                  <strong>TEACHER:</strong> John Doe
                </p>
              </div>
            </div>
            <div className="class-actions">
              <div className="class-code-section">
                <h3>CLASS CODE</h3>
                <p className="class-code">DEF456</p>
              </div>
              <button
                className="enter-room-btn"
                onClick={() => handleEnterRoom()}
              >
                ENTER ROOM
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewClass;
