import React from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/StudentVerifyPage.css";

const StudentVerifyPage = () => {
  const navigate = useNavigate();

  const handleCreateAccount = () => {
    navigate("/student-home");
  };

  return (
    <div className="information-student-form">
      <h2 className="form-title">Verify Your Information</h2>

      <div className="info-box">First Name: John</div>
      <div className="info-box">Last Name: Doe</div>
      <div className="info-box">Birthdate: January 1, 2010</div>
      <div className="info-box">Gender: Male</div>
      <div className="info-box">Password: ••••••••</div>

      <button type="submit" onClick={handleCreateAccount}>
        Create Account
      </button>
    </div>
  );
};

export default StudentVerifyPage;
