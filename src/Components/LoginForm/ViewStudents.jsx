import React from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/ViewStudent.css";

const ViewStudents = () => {
  const navigate = useNavigate();

  const students = [
    {
      id: 1,
      name: "Apatan, Nick Andrei",
      username: "Natanukin04",
      gender: "Male",
      email: "nickandrei.apatan@normi.edu.ph",
    },
    {
      id: 2,
      name: "Capon, Rosa Angelica C.",
      username: "Rosa14",
      gender: "Female",
      email: "rosaangelica.capon@normi.edu.ph",
    },
    {
      id: 3,
      name: "Guy-ab, Julse",
      username: "Circle",
      gender: "Male",
      email: "julse.guy-ab@normi.edu.ph",
    },
    {
      id: 4,
      name: "Bengin Nanales",
      username: "Pato40",
      gender: "Male",
      email: "bengin.nanales@normi.edu.ph",
    },
    {
      id: 5,
      name: "Devilleres, Prince Angelo A.",
      username: "Masuke14",
      gender: "Male",
      email: "princeangelo.devilleres@normi.edu.ph",
    },
    {
      id: 6,
      name: "Maraveles, Mika Althea",
      username: "Miks69",
      gender: "Female",
      email: "mikaalthea.maraveles@normi.edu.ph",
    },
    {
      id: 7,
      name: "Balacuit, Jhuvin",
      username: "JhuvinNgaPala",
      gender: "Male",
      email: "jhuvin.balacuit@normi.edu.ph",
    },
  ];

  return (
    <div className="view-student-container">
      <aside className="sidebar">
        <div className="teacher-profile">
          <img src="/Assets/avatar.png" alt="avatar" className="avatar-image" />
          <h2>Mr. John</h2>
          <p>TEACHER</p>
        </div>
        <nav className="menu">
          <button onClick={() => navigate("/view-students")}>
            👥 VIEW STUDENTS
          </button>
          <button onClick={() => navigate("/leaderboards")}>
            🏆 LEADERBOARDS
          </button>
          <button onClick={() => navigate("/create-quiz")}>
            🎮 CREATE QUIZ
          </button>
          <button onClick={() => navigate("/my-quizzes")}>📒 MY QUIZZES</button>
        </nav>
      </aside>

      {/* Main Section */}
      <main className="students-section">
        <h1 className="students-title">STUDENTS</h1>

        <div className="table-container">
          <table className="students-table">
            <thead>
              <tr>
                <th>NAME</th>
                <th>USERNAME</th>
                <th>GENDER</th>
                <th>EMAIL</th>
              </tr>
            </thead>
            <tbody>
              {students.map((s, index) => (
                <tr key={s.id}>
                  <td>
                    {index + 1}. {s.name}
                  </td>
                  <td>{s.username}</td>
                  <td>{s.gender}</td>
                  <td>{s.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default ViewStudents;
