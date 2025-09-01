import React from "react";
import "../../styles/AccountTypeStudent.css";
import { useNavigate } from "react-router-dom";
import { FaUserGraduate } from "react-icons/fa";

const AccountTypeStudent = () => {
  const navigate = useNavigate();

  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const years = Array.from(
    { length: 30 },
    (_, i) => new Date().getFullYear() - i
  );
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <form className="accounttype-student-form">
      <h2 className="form-title">ACCOUNT TYPE: STUDENT</h2>
      <input type="text" placeholder="First Name" />
      <input type="text" placeholder="Last Name" />
      <div className="birthdate-group">
        <select name="month">
          <option value="">Month</option>
          {months.map((month, idx) => (
            <option key={idx} value={month}>
              {month}
            </option>
          ))}
        </select>

        <select name="day">
          <option value="">Day</option>
          {days.map((day) => (
            <option key={day} value={day}>
              {day}
            </option>
          ))}
        </select>

        <select name="year">
          <option value="">Year</option>
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>

      <select name="gender">
        <option value="">Select Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </select>

      <button type="button" onClick={() => navigate("/student-password")}>
        Next
      </button>
    </form>
  );
};

export default AccountTypeStudent;
