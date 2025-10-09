import React, { useState } from "react";
import "../../styles/CreateQuiz.css";
import { useNavigate, useLocation } from "react-router-dom";
import {
  FaArrowLeft,
  FaUsers,
  FaTrophy,
  FaGamepad,
  FaClipboard,
} from "react-icons/fa";

const CreateQuiz = () => {
  const [quizTitle, setQuizTitle] = useState("");
  const [lessonRef, setLessonRef] = useState("");
  const [quizDesc, setQuizDesc] = useState("");
  const [difficulty, setDifficulty] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { name: "VIEW STUDENTS", path: "/view-students", icon: <FaUsers /> },
    { name: "LEADERBOARDS", path: "/teacher-leaderboards", icon: <FaTrophy /> },
    { name: "CREATE QUIZ", path: "/create-quiz", icon: <FaGamepad /> },
    { name: "MY QUIZZES", path: "/my-quizzes", icon: <FaClipboard /> },
  ];

  const handleNext = () => {
    console.log({
      quizTitle,
      lessonRef,
      quizDesc,
      difficulty,
    });
    navigate("/select-map");
  };

  return (
    <div className="create-quiz-container">
      <div className="sidebar11">
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

      <div className="main-content3">
        <div className="quiz-box1">
          <div className="quiz-header1">
            <h2>CREATE QUIZ</h2>
          </div>
          <div className="quiz-form">
            <input
              type="text"
              placeholder="Quiz Title"
              value={quizTitle}
              onChange={(e) => setQuizTitle(e.target.value)}
            />
            <input
              type="text"
              placeholder="Lesson Reference"
              value={lessonRef}
              onChange={(e) => setLessonRef(e.target.value)}
            />
            <textarea
              placeholder="Quiz Description"
              value={quizDesc}
              onChange={(e) => setQuizDesc(e.target.value)}
            />
            <input
              type="text"
              placeholder="Difficulty"
              value={difficulty}
              onChange={(e) => setDifficulty(e.target.value)}
            />
            <button className="next-btn" onClick={handleNext}>
              NEXT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateQuiz;
