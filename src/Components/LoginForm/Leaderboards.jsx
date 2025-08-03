import React from "react";
import "../../styles/Leaderboards.css";
import { FaTrophy, FaSignOutAlt, FaGamepad, FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const leaderboardData = [
  {
    rank: 1,
    name: "InsertDelete.",
    points: 25000,
    avatar: "/Assets/avatar.png",
  },
  { rank: 2, name: "Rosa04", points: 23575, avatar: "/Assets/andrea.png" },
  { rank: 3, name: "Miks69", points: 21234, avatar: "/Assets/avery.png" },
  { rank: 4, name: "Masuke96", points: 20212, avatar: "/Assets/eliza.png" },
  { rank: 5, name: "Lalay", points: 18898, avatar: "/Assets/kimberly.png" },
];

const Leaderboards = () => {
  const navigate = useNavigate();

  return (
    <div className="leaderboard-page">
      <aside className="sidebar1">
        <button
          className="leave-button"
          onClick={() => navigate("/view-class")}
        >
          <FaSignOutAlt /> LEAVE
        </button>
        <div className="profile-info">
          <img src="/Assets/avatar.png" alt="avatar" className="avatar-image" />
          <h1 className="username">InsertDelete.</h1>
          <span className="role">STUDENT</span>
        </div>
        <nav className="menu">
          <button onClick={() => navigate("/join-game")}>
            <FaGamepad /> JOIN GAME
          </button>
          <button onClick={() => navigate("/set-profile")}>
            <FaUser /> PROFILE
          </button>
          <button className="active">
            <FaTrophy /> LEADERBOARDS
          </button>
        </nav>
      </aside>

      <main className="leaderboard-content">
        <h2 className="leaderboard-title">
          <FaTrophy /> LEADERBOARD
        </h2>
        <div className="leaderboard-table">
          <div className="table-header">
            <span>RANK</span>
            <span>NAME</span>
            <span>POINTS</span>
          </div>
          {leaderboardData.map((player) => (
            <div
              key={player.rank}
              className={`table-row rank-${
                player.rank <= 3 ? player.rank : "default"
              }`}
            >
              <div className="rank-col">
                {player.rank <= 3 ? (
                  <FaTrophy className={`trophy-icon trophy-${player.rank}`} />
                ) : (
                  <div className="rank-circle">{player.rank}</div>
                )}
              </div>
              <div className="name-col">
                <img
                  src={player.avatar}
                  alt="avatar"
                  className="avatar-small"
                />
                <span>{player.name}</span>
              </div>
              <div className="points-col">
                {player.points.toLocaleString()} <span>⭐</span>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Leaderboards;
