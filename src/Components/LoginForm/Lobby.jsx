import React, { useEffect, useState } from "react";
import "../../styles/Lobby.css";
import { useNavigate } from "react-router-dom";

const Lobby = () => {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(5);
  const [isStarting, setIsStarting] = useState(false);
  const [hasNavigated, setHasNavigated] = useState(false); // prevent double navigation

  const players = [
    { id: 1, avatar: "/Assets/avatar.png" },
    { id: 2, avatar: "/Assets/adrian.png" },
    { id: 3, avatar: "/Assets/andrea.png" },
    { id: 4, avatar: "/Assets/eliza.png" },
    { id: 5, avatar: "/Assets/emery.png" },
    { id: 6, avatar: "/Assets/kimberly.png" },
    { id: 7, avatar: "/Assets/leah.png" },
    { id: 8, avatar: "/Assets/liliana.png" },
  ];

  useEffect(() => {
    if (countdown > 0) {
      // decrease countdown every second
      const timer = setTimeout(() => setCountdown((prev) => prev - 1), 1000);
      return () => clearTimeout(timer);
    } else if (!hasNavigated) {
      // countdown finished
      console.log("Countdown done, navigating to Gameplay...");
      setIsStarting(true);

      const delay = setTimeout(() => {
        navigate("/gameplay");
        setHasNavigated(true);
      }, 2000); // 2-second delay for “GAME STARTING...”

      return () => clearTimeout(delay);
    }
  }, [countdown, hasNavigated, navigate]);

  return (
    <div className="lobby-container">
      <div className="lobby-main">
        <h1 className="lobby-title">LOBBY</h1>

        <p className="lobby-waiting">
          {countdown > 0
            ? `GAME STARTING IN ${countdown}`
            : isStarting
            ? "GAME STARTING..."
            : ""}
        </p>

        <div className="player-list">
          <div className="player-list-header">Players</div>
          <div className="player-list-slots">
            {players.map((player) => (
              <div key={player.id} className="player-slot filled">
                <img
                  src={player.avatar}
                  alt="Player Avatar"
                  className="player-avatar"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <aside className="lobby-sidebar">
        <button
          className="lobby-btn"
          onClick={() => navigate("/character-selection")}
        >
          <img src="/Assets/hat.png" alt="Change Character" />
          <span>CHANGE CHARACTER</span>
        </button>

        <button className="lobby-btn" onClick={() => navigate("/settings")}>
          <img src="/Assets/settings.png" alt="Settings" />
          <span>SETTINGS</span>
        </button>

        <button className="lobby-btn" onClick={() => navigate("/view-class")}>
          <img src="/Assets/back.png" alt="Back" />
          <span>BACK TO MENU</span>
        </button>
      </aside>
    </div>
  );
};

export default Lobby;
