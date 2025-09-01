import React from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/TeacherLeaderboards.css";
import {
  FaArrowLeft,
  FaUsers,
  FaTrophy,
  FaGamepad,
  FaClipboardList,
} from "react-icons/fa";

export default function TeacherLeaderboards() {
  const navigate = useNavigate();

  const leaderboardData = [
    {
      rank: 1,
      name: "Natanukkin04",
      points: 25000,
      medal: "🥇",
      bg: "#4f7a38",
    },
    { rank: 2, name: "Miks<3", points: 23575, medal: "🥈", bg: "#e9d18d" },
    { rank: 3, name: "Rosa14", points: 21245, medal: "🥉", bg: "#c58a4f" },
    { rank: 4, name: "Circle", points: 18000 },
    { rank: 5, name: "AyawLay", points: 17245 },
    { rank: 6, name: "Nashyouuu", points: 15560 },
    { rank: 7, name: "CutiePatootie", points: 15425 },
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
          <div className="menu-item" onClick={() => navigate("/students")}>
            <FaUsers /> VIEW STUDENTS
          </div>
          <div
            className="menu-item active"
            onClick={() => navigate("/leaderboards")}
          >
            <FaTrophy /> LEADERBOARDS
          </div>
          <div className="menu-item" onClick={() => navigate("/create-quiz")}>
            <FaGamepad /> CREATE QUIZ
          </div>
          <div className="menu-item" onClick={() => navigate("/my-quizzes")}>
            <FaClipboardList /> MY QUIZZES
          </div>
        </div>
      </div>

      <div className="main-content">
        <div className="leaderboard-header">
          <FaTrophy className="trophy-icon" />
          <h1 className="leaderboard-title">LEADERBOARD</h1>
        </div>

        <div className="leaderboard-table">
          <div className="table-header">
            <span>RANK</span>
            <span>NAME</span>
            <span>POINTS</span>
          </div>

          {leaderboardData.map((entry) => (
            <div
              key={entry.rank}
              className="table-row"
              style={{ backgroundColor: entry.bg || "#a6a6a6" }}
            >
              <span>{entry.medal || entry.rank}</span>
              <span>{entry.name}</span>
              <span>{entry.points.toLocaleString()} ⭐</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
