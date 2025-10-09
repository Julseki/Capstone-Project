import React, { useState } from "react";
import "../../styles/LoginForm.css";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="wrapper">
      <form action="">
        <h1>LOGIN</h1>
        <div className="input-box">
          <input type="text" placeholder="Email" required />
        </div>
        <div className="input-box password-box">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            required
          />
          <span
            className="toggle-password"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? "🙈" : "👁️"}
          </span>
        </div>
        <div className="button-container">
          <div className="button-group">
            <button type="submit" className="login-button">
              LOG IN
            </button>
            <div className="or-separator">OR</div>
            <button
              type="button"
              className="signup-button"
              onClick={() => navigate("/signup")}
            >
              SIGN UP
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
