import React, { useState, useEffect } from "react";
import {
  FaGamepad,
  FaUser,
  FaTrophy,
  FaSignOutAlt,
  FaBell,
} from "react-icons/fa";
import "../../styles/StudentClass.css";
import { useLocation, useNavigate } from "react-router-dom";

const StudentClass = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const classCode = location.state?.classCode;
  const [spin, setSpin] = useState(false);

  useEffect(() => {
    setSpin(true);
    const timer = setTimeout(() => setSpin(false), 600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="student-class-container">
      <div className="notification">
        <FaBell className="notification-icon" />
        <span className="notification-text"></span>
      </div>

      <aside className="sidebar8">
        <button
          className="leave-button"
          onClick={() => navigate("/view-class")}
        >
          <FaSignOutAlt /> LEAVE
        </button>

        <div className="profile-section">
          <div className="avatar" />
          <img
            src="/Assets/avatar.png"
            alt="Avatar"
            className={`avatar ${spin ? "spin" : ""}`}
          />

          <h1 className="username">InsertDelete.</h1>
          <span
            style={{
              fontFamily: "Poppins, sans-serif",
              color: "#FFFFFF ",
              fontSize: "16px",
              fontWeight: "bold",
            }}
          >
            STUDENT
          </span>
        </div>
        <nav className="menu">
          <button
            onClick={() => navigate("/join-game")}
            className={location.pathname === "/join-game" ? "active" : ""}
          >
            <FaGamepad /> JOIN GAME
          </button>
          <button
            onClick={() => navigate("/set-profile")}
            className={location.pathname === "/set-profile" ? "active" : ""}
          >
            <FaUser /> PROFILE
          </button>
          <button
            onClick={() => navigate("/leaderboards")}
            className={location.pathname === "/leaderboards" ? "active" : ""}
          >
            <FaTrophy /> LEADERBOARDS
          </button>
        </nav>
      </aside>

      <main className="main-content">
        <div className="progress">
          <div className="progress-box">
            <p>QUIZZES COMPLETED</p>
            <span>0/10</span>
          </div>
          <div className="progress-box">
            <p>ACHIEVEMENTS UNLOCKED</p>
            <span>0/25</span>
          </div>
        </div>
        <div className="badges-section">
          <h3>BADGES</h3>
          <div className="badges">
            <div className="badge blue">
              XP COLLECTOR
              <img
                src="/Assets/diamond.png"
                alt="Diamond"
                className="diamond"
              />
            </div>
            <div className="badge orange">
              MASTERMIND
              <img src="/Assets/star.png" alt="Star" className="star" />
            </div>
            <div className="badge yellow">
              QUICK THINKER
              <img
                src="/Assets/thunder.png"
                alt="Thunder"
                className="thunder"
              />
            </div>
            <div className="badge brown">
              QUIZ CHAMPION
              <img src="/Assets/Trophy.png" alt="Trophy" className="Trophy" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default StudentClass;
