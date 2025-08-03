import React, { useState } from "react";
import "../../styles/StudentPassword.css";
import { useNavigate } from "react-router-dom";

const StudentPassword = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    navigate("/student-verify");
  };

  return (
    <div className="password-student-form">
      <h2 className="form-title">Create Password</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <button type="submit">Next</button>
      </form>
    </div>
  );
};

export default StudentPassword;
