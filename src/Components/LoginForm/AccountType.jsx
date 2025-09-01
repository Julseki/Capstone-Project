import React from "react";
import "../../styles/AccountType.css";
import { useNavigate } from "react-router-dom";
import { FaUserGraduate, FaChalkboardTeacher } from "react-icons/fa";

const AccountType = () => {
  const navigate = useNavigate();

  return (
    <div className="accounttype-wrapper">
      <form>
        <p>SELECT ACCOUNT TYPE</p>
        <div className="accounttype-box-container">
          <div
            className="accounttype-box student-box"
            onClick={() => navigate("/student")}
          >
            <FaUserGraduate className="account-icon" />
            <span>Student</span>
          </div>
          <div
            className="accounttype-box teacher-box"
            onClick={() => navigate("/teacher")}
          >
            <FaChalkboardTeacher className="account-icon" />
            <span>Teacher</span>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AccountType;
