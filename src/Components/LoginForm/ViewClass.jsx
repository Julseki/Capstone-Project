import React from "react";
import { FaUserCircle, FaCog, FaSignOutAlt } from "react-icons/fa";
import "../../styles/ViewClass.css";
import { useNavigate } from "react-router-dom";

const ViewClass = () => {
  const navigate = useNavigate();

  const handleLogout = () => navigate("/");
  const handleEnterRoom = () => navigate("/student-class");
  const handleProfileClick = () => navigate("/set-profile");
  const handleSettingsClick = () => navigate("/settings");
  const classes = [
    {
      grade: 3,
      section: "SAMPAGUITA",
      subject: "MATH",
      teacher: "JOHN DOE",
      code: "ABC123",
      type: "class-card1",
    },
    {
      grade: 3,
      section: "ROSE",
      subject: "FILIPINO",
      teacher: "JANE SMITH",
      code: "DEF456",
      type: "class-card2",
    },
  ];

  return (
    <div className="student-home-container">
      <header className="student-home-header">
        <div className="header-icons">
          <div className="header-box1" onClick={handleProfileClick}>
            <FaUserCircle className="icon" />
            <span>PROFILE</span>
          </div>
          <div className="header-box2" onClick={handleSettingsClick}>
            <FaCog className="icon" />
            <span>SETTINGS</span>
          </div>
          <div className="header-box3" onClick={handleLogout}>
            <FaSignOutAlt className="icon" />
            <span>LOGOUT</span>
          </div>
        </div>
      </header>

      <div className="view-class-container">
        <h1 className="my-class-title">MY CLASS</h1>
        <div className="class-list">
          {classes.map((cls, index) => (
            <div className={cls.type} key={index}>
              <div className="class-info">
                <div className="class-details">
                  <p>
                    <strong>GRADE LEVEL:</strong> {cls.grade}
                  </p>
                  <p>
                    <strong>SECTION:</strong> {cls.section}
                  </p>
                  <p>
                    <strong>SUBJECT:</strong> {cls.subject}
                  </p>
                  <p>
                    <strong>TEACHER:</strong> {cls.teacher}
                  </p>
                </div>
              </div>
              <div className="class-actions">
                <div className="class-code-section">
                  <h3>CLASS CODE</h3>
                  <p className="class-code">{cls.code}</p>
                </div>
                <button className="enter-room-btn" onClick={handleEnterRoom}>
                  ENTER ROOM
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ViewClass;
