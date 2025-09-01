import React, { useState } from "react";
import "../../styles/SetProfile.css";
import {
  FaSignOutAlt,
  FaGamepad,
  FaUser,
  FaTrophy,
  FaEdit,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const avatarList = [
  "Oliver",
  "Eliza",
  "Ryan",
  "Mason",
  "Kimberly",
  "Adrian",
  "Riley",
  "Avery",
  "Ryker",
  "Jack",
  "Andrea",
  "Jessica",
  "Leah",
  "Liliana",
  "Eden",
  "Vivian",
  "Jameson",
  "Maria",
  "Valentina",
  "Emery",
];

const SetProfile = () => {
  const [selectedAvatar, setSelectedAvatar] = useState("Adrian");
  const [username, setUsername] = useState("InsertDelete.");
  const [isEditingUsername, setIsEditingUsername] = useState(false);
  const [hasCustomUsername, setHasCustomUsername] = useState(false);
  const [spinKey, setSpinKey] = useState(null);

  const navigate = useNavigate();

  return (
    <div className="profile-page">
      <aside className="sidebar3">
        <button
          className="leave-button"
          onClick={() => navigate("/view-class")}
        >
          <FaSignOutAlt /> LEAVE
        </button>
        <div className="sidebar-profile">
          <img
            src={
              selectedAvatar
                ? `/Assets/${selectedAvatar}.png`
                : "/Assets/Adrian.png"
            }
            alt="Selected Avatar"
            className={`avatar-large ${
              spinKey === selectedAvatar ? "spin" : ""
            }`}
          />
        </div>

        <h1 className="username">{username}</h1>
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

        <nav className="menu">
          <button onClick={() => navigate("/join-game")}>
            <FaGamepad /> JOIN GAME
          </button>
          <button className="active">
            <FaUser /> PROFILE
          </button>
          <button onClick={() => navigate("/leaderboards")}>
            <FaTrophy /> LEADERBOARDS
          </button>
          <button onClick={() => navigate("/character-selection")}>
            <FaUser /> CHARACTER
          </button>
        </nav>
      </aside>

      <main className="main-profile">
        <div className="form-section">
          <div className="input-row">
            <label>USERNAME</label>
            <div
              className="input-with-icon"
              onClick={() => setIsEditingUsername(true)}
            >
              <input
                type="text"
                value={username}
                readOnly={!isEditingUsername}
                onChange={(e) => {
                  setUsername(e.target.value);
                  setHasCustomUsername(true);
                }}
                onBlur={() => setIsEditingUsername(false)}
              />
              <FaEdit className="edit-icon" />
            </div>
          </div>

          <div className="input-row">
            <label>FULL NAME</label>
            <input type="text" placeholder="Enter full name" />
          </div>

          <div className="input-row">
            <label>GENDER</label>
            <input type="text" placeholder="Enter gender" />
          </div>

          <div className="input-row">
            <label>GRADE LEVEL</label>
            <input type="text" placeholder="Enter grade level" />
          </div>

          <div className="input-row">
            <label>SECTION</label>
            <input type="text" placeholder="Enter section" />
          </div>

          <div className="form-buttons">
            <button
              className="save-button"
              onClick={() => {
                navigate("/leaderboards");
              }}
            >
              SAVE
            </button>

            <button className="discard-button">DISCARD</button>
          </div>
        </div>

        <div className="avatar-selection">
          <div className="avatar-header">
            <h3>AVATARS</h3>
          </div>
          <div className="avatar-grid">
            {avatarList.map((name) => (
              <div
                key={name}
                className={`avatar-card ${
                  selectedAvatar === name ? "selected" : ""
                }`}
                onClick={() => {
                  setSelectedAvatar(name);
                  setSpinKey(name);
                  setTimeout(() => setSpinKey(null), 600);

                  if (!hasCustomUsername || username.trim() === "") {
                    setUsername(name);
                    setHasCustomUsername(false);
                  }
                }}
              >
                <img
                  src={`/Assets/${name}.png`}
                  alt={name}
                  className={`avatar-option ${spinKey === name ? "spin" : ""}`}
                />
                <p className="avatar-name">{name}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default SetProfile;
