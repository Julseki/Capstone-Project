import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/StudentVerifyPage.css";

const StudentVerifyPage = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");

  const handleCreateAccount = () => {
    alert("Account Created Successfully!");
    navigate("/student-home");
  };

  return (
    <div className="information-student-form">
      <h2 className="firm-title">ENTER YOUR INFORMATION</h2>

      <input
        type="text"
        placeholder="First Name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Last Name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        required
      />
      <input
        type="date"
        placeholder="Birthdate"
        value={birthdate}
        onChange={(e) => setBirthdate(e.target.value)}
        required
      />
      <select
        value={gender}
        onChange={(e) => setGender(e.target.value)}
        required
      >
        <option value="">Select Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </select>
      <input
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />

      <button type="button" onClick={handleCreateAccount}>
        Create Account
      </button>
    </div>
  );
};

export default StudentVerifyPage;
