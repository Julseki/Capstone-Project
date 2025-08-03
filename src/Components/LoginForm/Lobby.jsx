import React, { useState } from "react";
import "../../styles/Lobby.css";
import { useNavigate } from "react-router-dom";

const Lobby = () => {
  const navigate = useNavigate();

  const players = [
    { id: 1, avatar: "/Assets/avatar.png" },
    { id: 2, avatar: "/Assets/adrian.png" },
    { id: 3, avatar: "/Assets/andrea.png" },
    { id: 4, avatar: "/Assets/byron.png" },
    { id: 5, avatar: "" },
    { id: 6, avatar: "" },
  ];

  return (
    <div className="lobby-container">
      <div className="lobby-main">
        <h1 className="lobby-title">LOBBY</h1>
        <p className="lobby-waiting">GAME STARTING IN 5</p>

        <div className="player-list">
          <div className="player-list-header">Players</div>
          <div className="player-list-slots">
            {players.map((player) => (
              <div
                key={player.id}
                className={`player-slot ${player.avatar ? "filled" : "empty"}`}
              >
                {player.avatar ? (
                  <img
                    src={player.avatar}
                    alt="Player Avatar"
                    className="player-avatar"
                  />
                ) : (
                  <div className="empty-slot-placeholder"></div>
                )}
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
