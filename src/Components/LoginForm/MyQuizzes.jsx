import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../../styles/MyQuizzes.css";
import {
  FaArrowLeft,
  FaUsers,
  FaTrophy,
  FaGamepad,
  FaBook,
  FaClipboardList,
} from "react-icons/fa";

const MyQuizzes = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const quizzes = [
    {
      name: "Quiz Title 1",
      subject: "Filipino",
      difficulty: "Easy",
      date: "Jan. 17,2025",
    },
    {
      name: "Quiz Title 2",
      subject: "Filipino",
      difficulty: "Normal",
      date: "Jan. 15,2025",
    },
    {
      name: "Quiz Title 3",
      subject: "Math",
      difficulty: "Hard",
      date: "Jan. 10,2025",
    },
    {
      name: "Quiz Title 4",
      subject: "English",
      difficulty: "Easy",
      date: "Jan. 2,2025",
    },
  ];

  const menuItems = [
    { name: "VIEW STUDENTS", icon: <FaUsers />, path: "/view-students" },
    { name: "LEADERBOARDS", icon: <FaTrophy />, path: "/teacher-leaderboards" },
    { name: "CREATE QUIZ", icon: <FaGamepad />, path: "/create-quiz" },
    { name: "MY QUIZZES", icon: <FaClipboardList />, path: "/my-quizzes" },
  ];

  return (
    <div className="leaderboard-container">
      <div className="sidebar10">
        <button className="back-btn" onClick={() => navigate(-1)}>
          <FaArrowLeft /> BACK
        </button>

        <div className="profile-section">
          <img src="/Assets/avatar.png" alt="avatar" className="avatar-image" />
          <h2>Mr. John</h2>
          <p className="role">TEACHER</p>
        </div>

        <div className="menu">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className={`menu-item ${
                location.pathname === item.path ? "active" : ""
              }`}
              onClick={() => navigate(item.path)}
            >
              {item.icon} {item.name}
            </div>
          ))}
        </div>
      </div>

      <div className="main-content2">
        <div className="m">
          <h4>MY QUIZZES</h4>
        </div>

        <div className="quiz-table">
          <div className="quiz-header">
            <span>QUIZ NAME</span>
            <span>SUBJECT</span>
            <span>DIFFICULTY</span>
            <span>DATE</span>
          </div>

          {quizzes.map((quiz, index) => (
            <div className="quiz-row" key={index}>
              <span>{quiz.name}</span>
              <span>{quiz.subject}</span>
              <span>{quiz.difficulty}</span>
              <span>{quiz.date}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyQuizzes;
