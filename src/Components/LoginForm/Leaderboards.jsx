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
          <h1
            className="username"
            style={{
              fontSize: "20px",
              fontWeight: "bold",
              color: "#ffffff",
              margin: 0,
            }}
          >
            InsertDelete.
          </h1>
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
        <div
          className="leaderboard-title"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "6px",
            backgroundColor: "#6c5d38",
            padding: "6px 12px",
            borderRadius: "8px",
            boxShadow: "0 3px 5px rgba(0, 0, 0, 0.3)",
            color: "white",
            marginBottom: "20px",
          }}
        >
          <FaTrophy
            className="trophy-icon"
            style={{ fontSize: "28px", color: "#f9a602" }}
          />
          <span>LEADERBOARDS</span>
        </div>

        <div
          className="leaderboard-table"
          style={{
            width: "100%",
            borderRadius: "10px",
            backgroundColor: "#fff8dc",
            padding: "15px",
          }}
        >
          <div
            className="table-header1"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 3fr 2fr",
              alignItems: "center",
              textAlign: "center",
              padding: "10px 15px",
              borderBottom: "1px solid #ccc",
              fontWeight: "bold",
            }}
          >
            <span style={{ justifySelf: "center" }}>RANK</span>
            <span style={{ justifySelf: "center" }}>NAME</span>
            <span style={{ justifySelf: "center" }}>POINTS</span>
          </div>

          {leaderboardData.map((player) => (
            <div
              key={player.rank}
              className={`table-row rank-${
                player.rank <= 3 ? player.rank : "default"
              }`}
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 3fr 2fr",
                textAlign: "center",
                alignItems: "center",
                padding: "10px 15px",
                borderBottom: "1px solid #ccc",
                backgroundColor:
                  player.rank === 1
                    ? "#738d4d"
                    : player.rank === 2
                    ? "#c5a65e"
                    : player.rank === 3
                    ? "#6c5d38"
                    : "#808d86",
                color: "white",
              }}
            >
              <div
                className="rank-col"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {player.rank <= 3 ? (
                  <FaTrophy
                    className={`trophy-icon`}
                    style={{
                      color:
                        player.rank === 1
                          ? "gold"
                          : player.rank === 2
                          ? "silver"
                          : "#cd7f32",
                    }}
                  />
                ) : (
                  <div className="rank-circle">{player.rank}</div>
                )}
              </div>

              <div
                className="name-col"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: "10px",
                }}
              >
                <img
                  src={player.avatar}
                  alt="avatar"
                  className="avatar-small"
                  style={{ width: "32px", height: "32px", borderRadius: "50%" }}
                />
                <span>{player.name}</span>
              </div>

              <div
                className="points-col"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
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
