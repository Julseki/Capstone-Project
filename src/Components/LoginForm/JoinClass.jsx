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

      <div className="container">
        <h1 className="class-heading">
          <svg
            className="heading-icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M3 2v20h18V2h-7V0h9v24H1V0h9zM16 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0z" />
          </svg>
          <span>ENTER A CLASS CODE</span>
        </h1>

        <div className="input-wrapper">
          <input
            type="text"
            className={`input-field ${isValid === false ? "invalid" : ""}`}
            value={classCode}
            onChange={handleInputChange}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSubmit();
              }
            }}
          />
          {isValid === true && <FaCheckCircle className="valid-icon" />}
          {isValid === false && <FaTimesCircle className="invalid-icon" />}
        </div>
        <div className="button-container">
          <button className="button submit-button" onClick={handleSubmit}>
            SUBMIT
          </button>
          <button className="button cancel-button" onClick={handleCancel}>
            CANCEL
          </button>
        </div>
        {isValid === false && (
          <p className="error-text">INVALID CODE. PLEASE TRY AGAIN.</p>
        )}
      </div>
    </div>
  );
};

export default JoinClass;
