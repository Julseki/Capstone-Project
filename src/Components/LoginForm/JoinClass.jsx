import React, { useState } from "react";
import {
  FaUserCircle,
  FaCog,
  FaSignOutAlt,
  FaCheckCircle,
  FaTimesCircle,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "../../styles/JoinClass.css";

const JoinClass = () => {
  const [classCode, setClassCode] = useState("");
  const [isValid, setIsValid] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = () => {
    const isCodeValid = classCode === "ABC123";
    setIsValid(isCodeValid);

    if (isCodeValid) {
      navigate("/my-class");
    }
  };

  const handleInputChange = (e) => {
    setClassCode(e.target.value);
    setIsValid(null);
  };

  const handleCancel = () => {
    navigate("/student-home");
  };
  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className="student-home-container">
      <header className="student-home-header">
        <div className="header-left"></div>
        <div className="header-icons">
          <div className="header-box1">
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

      <div className="container">
        <h1>ENTER A CLASS CODE</h1>
        <div className="input-wrapper">
          <input
            type="text"
            className={`input-field ${isValid === false ? "invalid" : ""}`}
            value={classCode}
            onChange={handleInputChange}
          />
          {isValid === true && <FaCheckCircle className="valid-icon" />}
          {isValid === false && <FaTimesCircle className="invalid-icon" />}
        </div>

        {isValid === false && (
          <p className="error-text">Invalid code. Please try again.</p>
        )}

        <div>
          <button className="button submit-button" onClick={handleSubmit}>
            SUBMIT
          </button>
          <button className="button cancel-button" onClick={handleCancel}>
            CANCEL
          </button>
        </div>
      </div>
    </div>
  );
};

export default JoinClass;
