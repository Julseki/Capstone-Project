import React, { useState } from "react";
import { FaSignOutAlt, FaGamepad, FaUser, FaTrophy } from "react-icons/fa";
import { MdSportsEsports } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import "../../styles/JoinGame.css";

const games = [
  {
    map: "THE HOUSE",
    mode: "SINGLE PLAYER",
    difficulty: "NORMAL",
    duration: "30 MIN",
    status: "NOT STARTED",
    date: "April 5, 2025",
  },
  {
    map: "THE HOUSE",
    mode: "SINGLE PLAYER",
    difficulty: "NORMAL",
    duration: "30 MIN",
    status: "PLAYING",
    date: "April 5, 2025",
  },
  {
    map: "THE HOUSE",
    mode: "SINGLE PLAYER",
    difficulty: "NORMAL",
    duration: "30 MIN",
    status: "FINISHED",
    date: "April 4, 2025",
  },
];

const JoinGame = () => {
  const navigate = useNavigate();
  const [showQuizForm, setShowQuizForm] = useState(false);

  const handleJoinClick = () => {
    setShowQuizForm(true);
  };

  const handleBackClick = () => {
    setShowQuizForm(false);
  };

  return (
    <div className="join-game-page">
      <aside className="sidebar4">
        <button
          className="leave-button"
          onClick={() => navigate("/view-class")}
        >
          <FaSignOutAlt /> LEAVE
        </button>
        <div className="profile-info">
          <img src="/Assets/avatar.png" alt="avatar" className="avatar-image" />
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
          <button className="active">
            <FaGamepad /> JOIN GAME
          </button>
          <button onClick={() => navigate("/set-profile")}>
            <FaUser /> PROFILE
          </button>
          <button onClick={() => navigate("/leaderboards")}>
            <FaTrophy /> LEADERBOARDS
          </button>
        </nav>
      </aside>

      <main className="join-game-content">
        <h2 className="game-title">
          <MdSportsEsports className="game-icon" />
          GAME
        </h2>
        {!showQuizForm ? (
          <div className="game-list">
            {games.map((game, index) => (
              <div className="game-card" key={index}>
                <div className="game-details">
                  <p>MAP : {game.map}</p>
                  <p>GAME MODE : {game.mode}</p>
                  <p>GAME DIFFICULTY : {game.difficulty}</p>
                  <p>DURATION : {game.duration}</p>
                  <p>
                    STATUS :{" "}
                    <span
                      className={`status ${game.status
                        .replace(" ", "-")
                        .toLowerCase()}`}
                    >
                      {game.status}
                    </span>
                  </p>
                </div>
                <div className="game-actions">
                  <button className="join-btn" onClick={handleJoinClick}>
                    JOIN
                  </button>
                  <span className="game-date">{game.date}</span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="quiz-form">
            <label>QUIZ TITLE</label>
            <input type="text" placeholder="Enter quiz title" />

            <label>DESCRIPTION</label>
            <textarea placeholder="Enter quiz description"></textarea>

            <div className="quiz-buttons">
              <button className="join-btn" onClick={() => navigate("/lobby")}>
                JOIN GAME
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default JoinGame;
