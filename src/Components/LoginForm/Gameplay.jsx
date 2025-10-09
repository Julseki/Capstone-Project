import React, { useEffect, useState } from "react";
import "../../styles/Gameplay.css";
import { useNavigate } from "react-router-dom";


const Gameplay = () => {
  const navigate = useNavigate();

  // Countdown state: 30 minutes (in seconds)
  const [timeLeft, setTimeLeft] = useState(30 * 60);

  // Convert seconds to mm:ss format
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(
      2,
      "0"
    )}`;
  };

  // Timer countdown effect
  useEffect(() => {
    if (timeLeft <= 0) return; // Stop when timer reaches 0

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  // Players, character, etc.
  return (
    <div className="gameplay-container">
      {/* Mini-map */}
      <div className="mini-map">
        <img src="/Assets/Map1.png" alt="Map" />
        <div className="mini-map-label">Living Room</div>
      </div>

      {/* Timer */}
      <div className="timer">{formatTime(timeLeft)}</div>

      {/* Settings + Leave */}
      <div className="gameplay-buttons">
        <button className="gameplay-btn" onClick={() => navigate("/settings")}>
          <img src="/Assets/settings.png" alt="Settings" />
          <span>SETTINGS</span>
        </button>

        <button
          className="gameplay-btn"
          onClick={() => navigate("/view-class")}
        >
          <img src="/Assets/leave.png" alt="Leave Game" />
          <span>LEAVE GAME</span>
        </button>
      </div>

      {/* Character */}
      <div className="character-section">
        <img
          src="/Assets/knight.png"
          alt="Character"
          className="character-sprite"
        />
        <div className="character-info">
          <div className="character-name">Natanukkin04</div>
          <div className="character-hp">
            <div className="hp-bar">
              <div className="hp-fill"></div>
            </div>
            <span className="hp-text">100/100</span>
          </div>
          <div className="character-level">LVL 1</div>
        </div>
      </div>

      {/* Score Display */}
      <div className="score-display">SCORE: 0/10</div>
    </div>
  );
};

export default Gameplay;
